const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
const SALES_EMAIL = 'sales@mesigroup.co.za';
const INFO_EMAIL = 'info@mesigroup.co.za';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'MESI Website <noreply@mesigroup.co.za>';

async function verifyTurnstile(token, ip) {
  const body = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY,
    response: token,
  });
  if (ip) body.append('remoteip', ip);

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  const data = await res.json();
  return data.success === true;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, company, phone, division, message, website, 'cf-turnstile-response': turnstileToken } = req.body || {};

  // Honeypot: real users never fill this hidden field. Bots that do get a
  // fake success response so they don't learn to adapt.
  if (website) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Name, email, and message are required.' });
    return;
  }

  if (!turnstileToken) {
    res.status(400).json({ error: 'Verification challenge missing. Please try again.' });
    return;
  }

  const clientIp = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || undefined;
  const verified = await verifyTurnstile(turnstileToken, clientIp);
  if (!verified) {
    res.status(400).json({ error: 'Verification failed. Please try again.' });
    return;
  }

  // Specific division selected = sales/quote lead. Blank or "General Enquiry" = info.
  const toEmail = division && division !== 'general' ? SALES_EMAIL : INFO_EMAIL;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        phone ? `Phone: ${phone}` : null,
        division ? `Division: ${division}` : null,
        '',
        message,
      ].filter(Boolean).join('\n'),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend send failed:', err);
    res.status(500).json({ error: 'Failed to send message. Please try again or email us directly.' });
  }
};
