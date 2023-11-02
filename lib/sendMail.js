const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com", //email koji je u email-podesavanjima.zamena za service:"gmail"
  // port: 465,  // ovo je sve zamenjeno sa service:"gmail",
  // secure: true,
  service: "gmail",
  auth: {
    user: "slavkoroganovic123@gmail.com",
    pass: "tbll qryu jadp hjwg", //pasvord iz emaila 2-factor  secure
  },
});

const sendMail = async ({ email, subject, html }) => {
  const newMail = await transporter.sendMail({
    to: email,
    from: "Portfolio <slavkoroganovic123@gmail.com>",
    subject,
    html,
  });
  return newMail;
};

module.exports = sendMail;
