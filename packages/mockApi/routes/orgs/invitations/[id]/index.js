const { successResp, errorResp } = require('../../../../utils');
module.exports = (req, res) => {
  switch (parseInt(req.params.id)) {
    case 1:
      successResp({
        detail: 'success',
      })(req, res);
      break;
    case 3:
      errorResp({
        code: 409,
        detail: 'you are already in an organization, please leave the organization first',
      })(req, res);
      break;
    default:
      errorResp({
        code: 404,
        detail: 'does not found',
      })(req, res);
      break;
  }
};
