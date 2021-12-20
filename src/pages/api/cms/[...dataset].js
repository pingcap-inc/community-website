import { api } from '@tidb-community/datasource';

// This handler proxies request to
const handler = async (req, res) => {
  const { dataset, ...params } = req.query;

  const client = api.initStrapiClient();

  try {
    const response = await client.request({
      method: req.method,
      url: '/' + dataset.join('/'),
      params,
    });
    res.status(response.status).json(response.data);
  } catch (/** @type import('axios').AxiosError*/ e) {
    res.status(e?.response?.status ?? 500).json(e?.response?.data ?? e.message);
  }
};

export default handler;
