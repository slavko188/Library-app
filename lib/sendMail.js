const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "slavkoroganovic123@gmail.com",
    pass: "tbll qryu jadp hjwg",
  },
});

const sendMail = async (id, email) => {
  const newMail = await transporter.sendMail({
    to: email,
    from: "Portfolio <slavkoroganovic123@gmail.com>",
    subject: "Activation account",
    html: `
        <p> Click on activation link </p>
        <a href="http://localhost:3000/auth/activate/${id}">Activation link</a>`,
  });
  return newMail;
};

module.exports = sendMail;
