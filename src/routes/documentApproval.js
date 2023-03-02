const express = require("express");
const router = express.Router();
const { diskStorageFile } = require("../config/multerStorage");
const multer = require("multer");

let upload = multer({ storage: diskStorageFile });
const documentApprovalController = require("../controllers/documentApproval");

router.post(
  "/registerDocumentApproval",
  upload.single("file"),
  documentApprovalController.registerDocumentApproval
);

router.get(
  "/getAllDocumentApproval",
  documentApprovalController.getAllDocumentApproval
);

router.delete(
  "/deleteDocumentApproval",
  documentApprovalController.deleteDocumentApproval
);

router.put(
  "/approve1Document/:id",
  upload.single("file"),
  documentApprovalController.approve1Document
);

router.put(
  "/approve2Document/:id",
  upload.single("file"),
  documentApprovalController.approve2Document
);

router.post(
  "/getDocumentByTypeDocumentAndSection",
  documentApprovalController.getDocumentByTypeDocumentAndSection
);

router.get(
  "/getDocumentByApprovalId/:id",
  documentApprovalController.getDocumentByApprovalId
);

module.exports = router;
