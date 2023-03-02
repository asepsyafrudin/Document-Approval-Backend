const userModel = require("../models/user");
const { connect } = require("../config/connectDB");
const sendEmailConfig = require("../config/sendEmail");

const sendEmail = (req, res) => {
  const approvalId = req.body.approvalId;
  const approvalUserId = req.body.approvalUserId;
  userModel.findById(connect, approvalUserId, (err, result) => {
    if (err) throw err;
    if (result.length !== 0) {
      sendEmailConfig(result[0], approvalId);
      res.json("Email telah terkirim");
    } else {
      res.json("gagal kirim email");
    }
  });
};

module.exports = { sendEmail };
