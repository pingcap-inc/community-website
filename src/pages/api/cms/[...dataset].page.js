import { api } from '@tidb-community/datasource';

// This handler proxies request to
const handler = async (req, res) => {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  
  const { dataset, ...params } = req.query;

  const client = await api.initStrapiClient();

  if (!/get/i.test(req.method)) {
    res.status(403).json({ message: 'forbidden' });
    return;
  }

  try {
    const data = await client.request({
      method: req.method,
      url: '/' + dataset.join('/'),
      params,
    });
    res.status(200).json(data);
  } catch (/** @type import('axios').AxiosError*/ e) {
    res.status(e?.response?.status ?? 500).json(e?.response?.data ?? e.message);
  }
};

export default handler;
