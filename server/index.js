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
        service: 'Gmail',
        auth: {
            user:"swastyahealthcarecentres@gmail.com", 
            pass: "hkjwonrmfxmxcyga", 
        },
    });

    const mailOptions = {
        from: email, 
        to: "swastyahealthcarecentres@gmail.com",
        subject: `New Callback Request for ${treatment}`,
        text: `You have received a new callback request:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nTreatment: ${treatment}`,
        
    };
    // console.log({text})
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
