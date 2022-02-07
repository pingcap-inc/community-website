import client from '../client';

export const getMe = () => client.get('/api/points/me');
export const checkIn = () => client.post('/api/points/daily-checkin');
export const getProducts = () => client.get('/api/points/shop/products');
export const sendCode = (phone) => client.post('/api/sms/code', { phone });
export const redeem = ({
  product_id,
  consignee_name,
  consignee_phone,
  consignee_phone_code,
  consignee_addrss,
  comment,
}) =>
  client.post('/api/points/shop/redeem', {
    product_id,
    consignee_name,
    consignee_phone,
    consignee_phone_code,
    consignee_addrss,
    comment,
  });
export const getRedeemRecords = () => client.get('/api/points/shop/redeem-records');
export const getAwardedPoints = ({ currentPage, perPage }) =>
  client.get('/api/points/awarded', { params: { currentPage, perPage } });
