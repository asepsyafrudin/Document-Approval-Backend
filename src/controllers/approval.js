const { connect } = require("../config/connectDB");
const { SUCCESS, FAILED } = require("../config/const");
const approvalModel = require("../models/approval");
const userModel = require("../models/user");


const registerApproval = async (req, res) => {
  try {
    let arrayData = [];
    const checkUserIdAsForeignKey = async () => {
      await userModel.findById(connect, req.body.userId, (err, result) => {
        if (err) throw err;
        result.forEach((element) => {
          arrayData.push(element);
        });
        if (arrayData.length === 0) {
          res.json(FAILED);
        } else {
          approvalModel.registerapproval(connect, req.body, (err, result) => {
            if (err) throw err;
            res.json(SUCCESS);
          });
        }
      });
    };
    await checkUserIdAsForeignKey();
  } catch (error) {
    console.log(error);
  }
};

const deleteApproval = (req, res) => {
  try {
    approvalModel.deleteApproval(connect, req.params.id, (err, result) => {
      if (err) throw err;
      res.json(SUCCESS);
    });
  } catch (error) {}
};

const getAllApproval = (req, res) => {
  try {
    approvalModel.getAllApproval(connect, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerApproval, deleteApproval, getAllApproval };
