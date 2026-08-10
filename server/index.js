const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── Data Store (JSON file-based, swap for DB in production) ──────────────────
const DATA_FILE = path.join(__dirname, 'queries.json');

const readQueries = () => {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
};

const writeQueries = (queries) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(queries, null, 2));
};

// ─── Nodemailer Transporter ───────────────────────────────────────────────────
// Configure with your SMTP credentials via environment variables
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password',
  },
});

// ─── Routes ───────────────────────────────────────────────────────────────────

/**
 * POST /api/contact
 * Submit a contact form query.
 * Saves to queries.json and sends email notification to admin.
 */
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  // Build query record
  const query = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() || '',
    subject: subject.trim(),
    message: message.trim(),
    status: 'new',
    createdAt: new Date().toISOString(),
  };

  // Save to data store
  const queries = readQueries();
  queries.unshift(query);
  writeQueries(queries);

  // Send email to admin
  try {
    await transporter.sendMail({
      from: `"ImmiEx Website" <${process.env.EMAIL_USER || 'your-email@gmail.com'}>`,
      to: process.env.ADMIN_EMAIL || 'admin@domain.com',
      subject: `[ImmiEx] New Contact Query: ${query.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: #25345d; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Query</h1>
            <p style="color: #a0b4d6; margin: 4px 0 0;">ImmiEx Immigration Consulting</p>
          </div>
          <div style="padding: 28px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 120px; font-size: 13px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #333; font-size: 13px;">${query.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #333; font-size: 13px;"><a href="mailto:${query.email}" style="color: #ff4d15;">${query.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; color: #333; font-size: 13px;">${query.phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; color: #333; font-size: 13px;">${query.subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;"><strong>Message:</strong></td>
                <td style="padding: 8px 0; color: #333; font-size: 13px; white-space: pre-wrap;">${query.message}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;"><strong>Received:</strong></td>
                <td style="padding: 8px 0; color: #333; font-size: 13px;">${new Date(query.createdAt).toLocaleString()}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f5f7fa; padding: 16px; text-align: center; border-top: 1px solid #e0e0e0;">
            <a href="http://localhost:5000/admin" style="background: #ff4d15; color: white; padding: 10px 24px; border-radius: 4px; text-decoration: none; font-size: 13px; font-weight: bold;">
              View in Admin Panel
            </a>
          </div>
        </div>
      `,
    });
  } catch (err) {
    // Log but don't fail the request - query is already saved
    console.error('[Email Error]', err.message);
  }

  // Also send auto-reply to user
  try {
    await transporter.sendMail({
      from: `"ImmiEx Immigration Consulting" <${process.env.EMAIL_USER || 'your-email@gmail.com'}>`,
      to: query.email,
      subject: 'Thank you for contacting ImmiEx',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: #25345d; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Thank You, ${query.name}!</h1>
          </div>
          <div style="padding: 28px;">
            <p style="color: #444; font-size: 14px; line-height: 1.7;">We have received your inquiry regarding <strong>${query.subject}</strong>. One of our expert immigration consultants will get back to you within <strong>24 business hours</strong>.</p>
            <p style="color: #444; font-size: 14px; line-height: 1.7;">If your matter is urgent, please call us directly at <strong>+61-2 3456 7890</strong>.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #888; font-size: 12px;">ImmiEx Immigration Consulting | 121 King St, Melbourne, Victoria 3000</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error('[Auto-reply Error]', err.message);
  }

  res.status(201).json({ message: 'Query received successfully.', id: query.id });
});

/**
 * GET /api/admin/messages
 * Retrieve all contact queries (admin use).
 * Add authentication middleware in production!
 */
app.get('/api/admin/messages', (req, res) => {
  const queries = readQueries();
  res.json({ total: queries.length, queries });
});

/**
 * PATCH /api/admin/messages/:id
 * Update query status (new → read → resolved).
 */
app.patch('/api/admin/messages/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const queries = readQueries();
  const idx = queries.findIndex((q) => q.id === id);
  if (idx === -1) return res.status(404).json({ message: 'Query not found.' });
  queries[idx].status = status || queries[idx].status;
  writeQueries(queries);
  res.json({ message: 'Updated.', query: queries[idx] });
});

/**
 * DELETE /api/admin/messages/:id
 * Delete a query.
 */
app.delete('/api/admin/messages/:id', (req, res) => {
  const { id } = req.params;
  let queries = readQueries();
  const before = queries.length;
  queries = queries.filter((q) => q.id !== id);
  if (queries.length === before) return res.status(404).json({ message: 'Query not found.' });
  writeQueries(queries);
  res.json({ message: 'Deleted.' });
});

// ─── Admin UI (simple, read-only HTML panel) ──────────────────────────────────
app.get('/admin', (req, res) => {
  const queries = readQueries();
  const rows = queries.map((q) => `
    <tr style="border-bottom:1px solid #e5e7eb;">
      <td style="padding:12px 16px;font-size:13px;color:#374151;">${q.name}</td>
      <td style="padding:12px 16px;font-size:13px;color:#374151;"><a href="mailto:${q.email}" style="color:#ff4d15;">${q.email}</a></td>
      <td style="padding:12px 16px;font-size:13px;color:#374151;">${q.phone || '—'}</td>
      <td style="padding:12px 16px;font-size:13px;color:#374151;">${q.subject}</td>
      <td style="padding:12px 16px;font-size:13px;color:#374151;max-width:220px;white-space:pre-wrap;">${q.message}</td>
      <td style="padding:12px 16px;font-size:12px;">
        <span style="
          background:${q.status === 'new' ? '#fef3c7' : q.status === 'resolved' ? '#d1fae5' : '#e0e7ff'};
          color:${q.status === 'new' ? '#92400e' : q.status === 'resolved' ? '#065f46' : '#3730a3'};
          padding:3px 10px; border-radius:9999px; font-weight:600;
        ">${q.status}</span>
      </td>
      <td style="padding:12px 16px;font-size:12px;color:#9ca3af;white-space:nowrap;">
        ${new Date(q.createdAt).toLocaleDateString()} ${new Date(q.createdAt).toLocaleTimeString()}
      </td>
    </tr>
  `).join('');

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      <title>ImmiEx Admin – Contact Queries</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Poppins', sans-serif; background: #f3f4f6; }
        .topbar { background: #25345d; color: white; padding: 16px 32px; display: flex; align-items: center; justify-content: space-between; }
        .topbar h1 { font-size: 20px; font-weight: 700; }
        .topbar span { font-size: 12px; color: #a0b4d6; }
        .badge { display: inline-block; background: #ff4d15; color: white; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 9999px; margin-left: 8px; }
        .container { max-width: 1400px; margin: 32px auto; padding: 0 24px; }
        .card { background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); overflow: hidden; }
        .card-header { padding: 16px 20px; border-bottom: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center; }
        .card-header h2 { font-size: 15px; font-weight: 600; color: #25345d; }
        table { width: 100%; border-collapse: collapse; }
        thead th { background: #f9fafb; padding: 10px 16px; text-align: left; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; }
        tbody tr:hover { background: #f9fafb; }
        .empty { text-align: center; padding: 48px; color: #9ca3af; font-size: 14px; }
        .refresh-btn { background: #25345d; color: white; border: none; padding: 8px 18px; font-size: 12px; font-weight: 600; border-radius: 4px; cursor: pointer; }
        .refresh-btn:hover { background: #ff4d15; }
      </style>
    </head>
    <body>
      <div class="topbar">
        <div>
          <h1>ImmiEx <span style="color:#ff4d15;">Admin</span></h1>
          <span>Contact Query Dashboard</span>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <span>Total Queries: <strong>${queries.length}</strong></span>
          <button class="refresh-btn" onclick="location.reload()">↻ Refresh</button>
        </div>
      </div>
      <div class="container">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px;">
          <div style="background:white;border-radius:8px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.08);border-left:4px solid #ff4d15;">
            <div style="font-size:28px;font-weight:700;color:#25345d;">${queries.length}</div>
            <div style="font-size:12px;color:#6b7280;margin-top:4px;">Total Queries</div>
          </div>
          <div style="background:white;border-radius:8px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.08);border-left:4px solid #f59e0b;">
            <div style="font-size:28px;font-weight:700;color:#25345d;">${queries.filter(q => q.status === 'new').length}</div>
            <div style="font-size:12px;color:#6b7280;margin-top:4px;">New / Unread</div>
          </div>
          <div style="background:white;border-radius:8px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.08);border-left:4px solid #10b981;">
            <div style="font-size:28px;font-weight:700;color:#25345d;">${queries.filter(q => q.status === 'resolved').length}</div>
            <div style="font-size:12px;color:#6b7280;margin-top:4px;">Resolved</div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>Contact Form Queries</h2>
            <span style="font-size:12px;color:#6b7280;">API: GET /api/admin/messages</span>
          </div>
          <div style="overflow-x:auto;">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Received</th>
                </tr>
              </thead>
              <tbody>
                ${rows || `<tr><td colspan="7" class="empty">No queries yet. Submit a form on the website to test!</td></tr>`}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅  ImmiEx Backend running at http://localhost:${PORT}`);
  console.log(`📋  Admin dashboard: http://localhost:${PORT}/admin`);
  console.log(`📬  Contact API:    POST http://localhost:${PORT}/api/contact\n`);
});
