const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, phone, email, treatment } = req.body;

    
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // e.g., Gmail, Yahoo
        auth: {
            user: process.env.USER, // replace with your email
            pass: process.env.PASS, // replace with your email password or app-specific password
        },
    });

    const mailOptions = {
        from: email, // user's email as the sender
        to: process.env.USER, // your email to receive the form data
        subject: `New Callback Request for ${treatment}`,
        text: `You have received a new callback request:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nTreatment: ${treatment}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ message: 'Error sending email', error });
        }
        res.status(200).send({ message: 'Email sent successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
