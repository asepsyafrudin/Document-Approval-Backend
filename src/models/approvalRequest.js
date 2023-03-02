const registerApprovalRequest = (con, data, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      con.query(`INSERT INTO t_approval_request SET 
            ApprovalId : '${data.approvalId}',
            userId : '${data.userId}',
            status : '${data.status}',
            approvalDate : '${data.approvalDate}'
            `);
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { registerApprovalRequest };
