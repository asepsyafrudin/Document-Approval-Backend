const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID =
  "70556152863-m0asljjaiq7sff2facnp22n89lgfkm88.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URL = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04MyjbL0iCLJACgYIARAAGAQSNwF-L9IrvvVjXWgLgSKSt_iFaIRVF2_aCKrFzfUZKrziSzR4AramS7gd_Pme97e7tMJCA5IbtGs";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEMail = async (dataUser, url) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAUTH2",
        user: "pedi.denso@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "PEDI DENSO <pedi.denso@gmail.com",
      to: "asseeppsyafrudin@gmail.com",
      subject: "email send from node js using gmail API",
      html: `<h1>Hay ${dataUser.name} INI TEST Menggunakan nodeMailer</h1>`,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEMail;
