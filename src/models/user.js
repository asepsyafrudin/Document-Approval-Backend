const registerUser = (con, data, filename, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected database mysql");
      con.query(
        `INSERT INTO t_users SET 
        name = '${data.name.toLowerCase()}', 
        npk = '${data.npk}',
        section = '${data.section.toLowerCase()}', 
        position = '${data.position.toLowerCase()}', 
        photo = '${filename}', 
        email = '${data.email.toLowerCase()}', 
        password ='${data.password}'`,
        callback
      );
      console.log("data success!!!");
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = (con, data, filename, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected database mysql");
      con.query(
        `UPDATE t_users SET 
        name = '${data.name.toLowerCase()}', 
        npk = '${data.npk}',
        section = '${data.section.toLowerCase()}', 
        position = '${data.position.toLowerCase()}', 
        photo = '${filename}', 
        email = '${data.email.toLowerCase()}', 
        password ='${data.password}' WHERE npk='${data.npk}'`,
        callback
      );
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = (con, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected database mysql");
      con.query(`SELECT * FROM t_users ORDER BY name ASC`, callback);
      console.log("data success!!!");
    });
  } catch (error) {
    console.log(error);
  }
};

const findById = (con, id, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connected database mysql");
      con.query(`SELECT *FROM T_USERS WHERE userId='${id}'`, callback);
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = (con, id, callback) => {
  try {
    con.connect((err) => {
      if (err) throw err;
      console.log("connect to database mysql");
      con.query(`DELETE FROM T_USERS WHERE userId = ${id}`, callback);
    });
  } catch (error) {
    console.log({ message: error });
  }
};

module.exports = { registerUser, getAllUser, findById, deleteUser, updateUser };
