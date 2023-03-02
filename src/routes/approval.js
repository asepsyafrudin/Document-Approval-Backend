const express = require("express");
const router = express.Router();

const approvalController = require("../controllers/approval");

router.post("/register", approvalController.registerApproval);
router.delete("/delete/:id", approvalController.deleteApproval);
router.get("/getAllApproval", approvalController.getAllApproval);
module.exports = router;
