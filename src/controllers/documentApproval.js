const documentApprovalModel = require("../models/documentApproval");
const { connect } = require("../config/connectDB");
const { SUCCESS } = require("../config/const");
const pdf2excel = require("pdf-to-excel");
const path = require("path");

const registerDocumentApproval = (req, res) => {
  try {
    let filename = "";
    if (!req.file) {
      filename = req.body.file;
    } else {
      filename =
        req.protocol +
        "://" +
        req.get("host") +
        "/static/files/" +
        req.file.filename;
    }
 
    let arrayData = [];
    const registerFunction = async () => {
      await documentApprovalModel.checkApprovalId(
        connect,
        req.body.approvalId,
        (err, result) => {
          if (err) throw err;
          result.forEach((element) => {
            arrayData.push(element);
          });
          if (arrayData.length === 0) {
            documentApprovalModel.registerDocumentApproval(
              connect,
              req.body,
              filename,
              (err) => {
                if (err) throw err;
                res.json(SUCCESS);
              }
            );
          } else {
            documentApprovalModel.updateDocumentByApprovalNumber(
              connect,
              req.body,
              filename,
              (err) => {
                if (err) throw err;
                res.json(SUCCESS);
              }
            );
          }
        }
      );
    };

    registerFunction();
  } catch (error) {
    console.log(error);
  }
};

const getAllDocumentApproval = (req, res) => {
  try {
    documentApprovalModel.getAllDocumentApproval(connect, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteDocumentApproval = (req, res) => {
  try {
    documentApprovalModel.deleteDocumentApproval(
      connect,
      req.params.id,
      (err) => {
        if (err) throw err;
        res.json(SUCCESS);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const approve1Document = (req, res) => {
  try {
    let filename = "";
    if (!req.file) {
      filename = "";
    } else {
      filename =
        req.protocol +
        "://" +
        req.get("host") +
        "/static/files/" +
        req.file.filename;
    }

    documentApprovalModel.approval1Document(
      connect,
      req.params.id,
      req.body,
      filename,
      (err) => {
        if (err) throw err;
        res.json(SUCCESS);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const approve2Document = (req, res) => {
  try {
    let filename = "";
    if (!req.file) {
      filename = "";
    } else {
      filename =
        req.protocol +
        "://" +
        req.get("host") +
        "/static/files/" +
        req.file.filename;
    }

    documentApprovalModel.approval2Document(
      connect,
      req.params.id,
      req.body,
      filename,
      (err) => {
        if (err) throw err;
        res.json(SUCCESS);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const getDocumentByTypeDocumentAndSection = (req, res) => {
  try {
    documentApprovalModel.getDocumentByTypeDocumentAndSection(
      connect,
      req.body,
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const getDocumentByApprovalId = (req, res) => {
  try {
    documentApprovalModel.getDocumentByApprovalId(
      connect,
      req.params.id,
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerDocumentApproval,
  getAllDocumentApproval,
  deleteDocumentApproval,
  approve1Document,
  approve2Document,
  getDocumentByTypeDocumentAndSection,
  getDocumentByApprovalId,
};
