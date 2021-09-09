const { errorResp, successResp } = require('../../utils');

module.exports = (req, res) => {
  const {
    // name,
    // phone,
    // email,
    // company,
    // jobTitle,
    // stageOfCompanyUseOfTidb,
    // reasonForApplication,
    // preferredWayOfSharing,
    // rolesWantToPlay,
    // wechatId,
    // bio,
    // channel,
    // referrer,
  } = req.body;

  // return errorResp({
  //   errors: {
  //     name: ["It's already been used"],
  //   },
  // })(req, res);

  successResp({
    detail: 'success',
  })(req, res);
};
