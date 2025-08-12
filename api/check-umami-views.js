import { Client } from 'pg';
import nodemailer from 'nodemailer';

let lastCheck = new Date(Date.now() - 60 * 1000); // 1 minute ago

export default async function handler(req, res) {
  try {
    // Connect to Umami DB
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
    await client.connect();

    // Query for new views since last check
    const query = `
      SELECT id, created_at, url 
      FROM events 
      WHERE created_at > $1
    `;
    const result = await client.query(query, [lastCheck.toISOString()]);

    // Update lastCheck timestamp
    lastCheck = new Date();

    if (result.rows.length > 0) {
      // Setup nodemailer transporter for SendGrid SMTP
      const transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        auth: {
          user: "apikey",                // SendGrid SMTP user is always "apikey"
          pass: process.env.SMTP_PASS,  // SendGrid API key here
        },
      });

      // Send an email for each new view
      for (const view of result.rows) {
        await transporter.sendMail({
          from: process.env.ALERT_EMAIL_FROM, // e.g. "Umami Alerts <alerts@yourdomain.com>"
          to: process.env.ALERT_EMAIL_TO,     // your email address
          subject: `New Umami Page View: ${view.url}`,
          text: `New page view detected.\n\nURL: ${view.url}\nTime: ${view.created_at}`,
        });
      }
    }

    await client.end();

    res.status(200).json({ message: "Checked Umami views", newViews: result.rows.length });
  } catch (error) {
    console.error("Error checking Umami views:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
