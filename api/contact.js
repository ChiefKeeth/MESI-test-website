const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
const SALES_EMAIL = 'sales@mesigroup.co.za';
const INFO_EMAIL = 'info@mesigroup.co.za';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'MESI Website <noreply@mesigroup.co.za>';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, company, phone, division, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Name, email, and message are required.' });
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
