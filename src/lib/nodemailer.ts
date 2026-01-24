import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // ✅ Recommended
    secure: false, // ✅ STARTTLS is used
    auth: {
        user: email,
        pass: password
    },
    tls: {
        rejectUnauthorized:  false
    }
})
