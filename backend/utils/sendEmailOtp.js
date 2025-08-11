const nodemailer = require('nodemailer');

const sendEmailOtp = async (to, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.OTP_EMAIL,      // your Gmail
      pass: process.env.OTP_EMAIL_PASS  // Gmail App Password
    }
  });

  const mailOptions = {
    from: process.env.OTP_EMAIL,
    to,
    subject: 'Your OTP Code',
    text: `Your OTP is ${otp}. It is valid for 5 minutes.`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmailOtp;
