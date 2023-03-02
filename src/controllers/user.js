const userModel = require("../models/user");
const { connect } = require("../config/connectDB");
const { SUCCESS, FAILED } = require("../config/const");

const uploadPhotoController = (req, res) => {
  let finalImageUrl =
    req.protocol +
    "://" +
    req.get("host") +
    "/static/image/" +
    req.file.filename;
  res.json({ message: SUCCESS, urlImage: finalImageUrl });
};

const registerUserController = (req, res) => {
  let filename = "";
  if (!req.file) {
    filename = "";
  } else {
    filename =
      req.protocol +
      "://" +
      req.get("host") +
      "/static/image/" +
      req.file.filename;
  }
  userModel.registerUser(connect, req.body, filename, (err) => {
    if (err) throw err;
    res.json(SUCCESS);
  });
};

const getUserController = (req, res) => {
  userModel.getAllUser(connect, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const deleteUser = async (req, res) => {
  try {
    let arrayData = [];
    const actionDelete = async () => {
      await userModel.findById(connect, req.params.id, (err, result) => {
        if (err) throw err;
        result.forEach((element) => {
          arrayData.push(element);
        });
        if (arrayData.length === 0) {
          res.json(FAILED);
        } else {
          userModel.deleteUser(connect, req.params.id, (err) => {
            if (err) throw err;
            res.json(SUCCESS);
          });
        }
      });
    };
    await actionDelete();
  } catch (error) {
    console.log({ message: error });
  }
};

const updateUser = (req, res) => {
  try {
    let filename = "";
    if (!req.file) {
      filename = req.body.photo;
    } else {
      filename =
        req.protocol +
        "://" +
        req.get("host") +
        "/static/image/" +
        req.file.filename;
    }
    userModel.updateUser(connect, req.body, filename, (err) => {
      if (err) throw err;
      res.json(SUCCESS);
    });
  } catch (error) {
    console.log(error);
  }
};

const findByIdUser = (req, res) => {
  userModel.findById(connect, req.params.id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  registerUserController,
  getUserController,
  deleteUser,
  updateUser,
  findByIdUser,
  uploadPhotoController,
};
