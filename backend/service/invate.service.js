require("dotenv").config()
const nodemailer = require('nodemailer');

const sendInviteEmail = async (recipientEmail, inviteLink) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SERVICE_USER,
            pass: process.env.SERVICE_PASSWORD,
        }
    });


    const mailOptions = {
        from: process.env.SERVICE_USER,
        to: recipientEmail,
        subject: 'Dəvət',
        html: `
            <h2>Sizi platformamıza dəvət edirik!</h2>
            <p>Dəvəti qəbul etmək üçün aşağıdakı linkə klikləyin:</p>
            <a href="${inviteLink}">${inviteLink}</a>
        `
    };


    await transporter.sendMail(mailOptions);
};

module.exports = sendInviteEmail;
