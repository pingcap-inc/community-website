// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSentry } from '@sentry/nextjs';

const handler = (req, res) => {
  res.status(200).json({ status: 'OK' });
};

export default withSentry(handler);
