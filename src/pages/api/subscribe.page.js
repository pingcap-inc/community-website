import axios from 'axios';

const handler = async (req, res) => {
  const mailChimpReqData = {
    email_address: req.body.email,
    status: 'subscribed',
  };

  try {
    await axios.post(
      `https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
      mailChimpReqData,
      {
        auth: {
          username: 'anystring',
          password: `${process.env.MAILCHIMP_KEY}`,
        },
      }
    );
    res.status(200).json({ detail: 'success' });
  } catch (error) {
    if (error.response.data.title === 'Member Exists') res.status(400).json({ detail: '重复订阅' });
    else res.status(400).json({ detail: '订阅失败' });
  }
};

export default handler;
