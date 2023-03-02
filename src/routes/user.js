const express = require("express");
const router = express.Router();
const { diskStorageImage } = require("../config/multerStorage");
const multer = require("multer");

let upload = multer({ storage: diskStorageImage });

const userController = require("../controllers/user");

//Register User
router.post(
  "/registerUser",
  upload.single("photo"),
  userController.registerUserController
);
router.get("/getUser/:id", userController.findByIdUser);
router.get("/getUser", userController.getUserController);
router.delete("/deleteUser/:id", userController.deleteUser);
router.put("/updateUser", upload.single("photo"), userController.updateUser);
router.post(
  "/upload",
  upload.single("photo"),
  userController.uploadPhotoController
);

module.exports = router;
