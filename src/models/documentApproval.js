const registerDocumentApproval = (con, data, filename, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected to database mysql");
      con.query(
        `INSERT INTO t_document SET 
            approvalId = '${data.approvalId}',
            section = '${data.section}',
            typeDocument ='${data.typeDocument}',
            processName = '${data.processName}',
            documentNumber = '${data.documentNumber}',
            representativePartNumber = '${data.representativePartNumber}',
            representativeType = '${data.representativeType}',
            revision = '${data.revision}',
            file = '${filename}',
            createdDate = '${data.createdDate}',
            approval1UserId = '${data.approval1UserId}',
            approval2UserId = '${data.approval2UserId}',
            createdBy = '${data.createdBy}',
            documentStatus = '${data.documentStatus}',
            remark = '${data.remark}',
            approval1Comment = '${data.approval1Comment}',
            approval2Comment = '${data.approval2Comment}',
            dateApproval1 = '${data.dateApproval1}',
            dateApproval2 = '${data.dateApproval2}'`,
        callback
      );
    });
  } catch (error) {
    console.log(error);
  }
};

const updateDocumentByApprovalNumber = (con, data, filename, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected to database mysql");
      con.query(
        `UPDATE t_document SET  section = '${data.section}',
      typeDocument ='${data.typeDocument}',
      processName = '${data.processName}',
      documentNumber = '${data.documentNumber}',
      representativePartNumber = '${data.representativePartNumber}',
      representativeType = '${data.representativeType}',
      revision = '${data.revision}',
      file = '${filename}',
      createdDate = '${data.createdDate}',
      approval1UserId = '${data.approval1UserId}',
      approval2UserId = '${data.approval2UserId}',
      createdBy = '${data.createdBy}',
      documentStatus = '${data.documentStatus}',
      remark = '${data.remark}',
      approval1Comment = '${data.approval1Comment}',
      approval2Comment = '${data.approval2Comment}',
      dateApproval1 = '${data.dateApproval1}',
      dateApproval2 = '${data.dateApproval2}' WHERE approvalId = '${data.approvalId}'`,
        callback
      );
    });
  } catch (error) {
    console.log(error);
  }
};

const checkApprovalId = (con, approvalId, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected to database mysql");
      con.query(
        `SELECT * FROM t_document WHERE approvalId = '${approvalId}'`,
        callback
      );
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllDocumentApproval = (con, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected to database mysql");
      con.query(`SELECT * FROM T_DOCUMENT ORDER BY ID DESC`, callback);
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteDocumentApproval = (con, id, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("coonected to database mysql");
      con.query(`DELETE FROM T_DOCUMENT WHERE approvalId = ${id}`, callback);
    });
  } catch (error) {
    console.log(error);
  }
};

const approval1Document = (con, id, data, filename, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected to database mysql");
      if (filename) {
        con.query(
          `UPDATE t_document SET
          documentStatus = '${data.documentStatus}',
          approval1Comment = '${data.approval1Comment}',
          dateApproval1 = '${data.dateApproval1}',
          file = '${filename}' WHERE approvalId = '${id}'
          `,
          callback
        );
      } else {
        con.query(
          `UPDATE t_document SET
          documentStatus = '${data.documentStatus}',
          approval1Comment = '${data.approval1Comment}',
          dateApproval1 = '${data.dateApproval1}' WHERE approvalId = '${id}'
          `,
          callback
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const approval2Document = (con, id, data, filename, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected to database mysql");
      if (filename) {
        con.query(
          `UPDATE t_document SET
          documentStatus = '${data.documentStatus}',
          approval2Comment = '${data.approval2Comment}',
          dateApproval2 = '${data.dateApproval2}',
          file = '${filename}' WHERE approvalId = '${id}'
          `,
          callback
        );
      } else {
        con.query(
          `UPDATE t_document SET
          documentStatus = '${data.documentStatus}',
          approval2Comment = '${data.approval2Comment}',
          dateApproval2 = '${data.dateApproval2}' WHERE approvalId = '${id}'
          `,
          callback
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const getDocumentByTypeDocumentAndSection = (con, data, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("Connected to database mysql get document by document type");
      con.query(
        `SELECT * FROM t_document WHERE typeDocument = '${data.typeDocument}' AND section = '${data.section}'`,
        callback
      );
    });
  } catch (error) {
    console.log(error);
  }
};

const getDocumentByApprovalId = (con, approvalId, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected to database mysql");
      con.query(
        `SELECT * FROM t_document where approvalId ='${approvalId}'`,
        callback
      );
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerDocumentApproval,
  updateDocumentByApprovalNumber,
  checkApprovalId,
  getAllDocumentApproval,
  deleteDocumentApproval,
  approval1Document,
  approval2Document,
  getDocumentByTypeDocumentAndSection,
  getDocumentByApprovalId,
};
