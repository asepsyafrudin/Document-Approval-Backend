const registerapproval = (con, data, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected database mysql");
      con.query(
        `INSERT INTO t_approval SET 
                section = '${data.section.toLowerCase()}', 
                userId = '${data.userId}',
                status = '${data.status.toLowerCase()}'`,
        callback
      );
      console.log("data success!!!");
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteApproval = (con, id, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected database mysql");
      con.query(`DELETE FROM T_APPROVAL WHERE ID = ${id}`, callback);
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllApproval = (con, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected database mysql");
      con.query(
        `SELECT t_approval.id, t_approval.section, t_approval.status, t_users.name , t_users.userId FROM t_approval LEFT JOIN t_users ON t_approval.userId = t_users.userId ORDER BY t_approval.id`,
        callback
      );
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerapproval, deleteApproval, getAllApproval };
