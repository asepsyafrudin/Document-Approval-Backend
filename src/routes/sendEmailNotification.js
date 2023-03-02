const express = require("express");
const sendEmailController = require("../controllers/emailNotification");
const router = express.Router();

router.post("/sendEmail", sendEmailController.sendEmail);

module.exports = router;
