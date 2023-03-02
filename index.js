const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const userRoutes = require("./src/routes/user");
const path = require("path");
const approvalRoutes = require("./src/routes/approval");
const sendEmailRoutes = require("./src/routes/sendEmailNotification");

const documentApprovalRoutes = require("./src/routes/documentApproval");

app.use("/static", express.static(path.join(__dirname, "src/assets")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/approval", approvalRoutes);
app.use("/api/documentApproval", documentApprovalRoutes);
app.use("/api/sendEmailNotification", sendEmailRoutes);

app.listen(port, () => {
  console.log(`App listnening port ${port}`);
});
