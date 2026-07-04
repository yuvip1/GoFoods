import FormData from 'form-data';
import Mailgun from 'mailgun.js';

export function getClient() {
  console.log('MAILGUN KEY:', process.env.MAILGUN_API_KEY); // ← ADD THIS
  
  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
  });

  return client;
}