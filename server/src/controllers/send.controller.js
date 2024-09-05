


const nodemailer = require('nodemailer');


exports.sendEmail = async (req, res) => {
    const { to, verification_code } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'm49261589@gmail.com', 
                pass: 'uvga jxim dorr vupk'   
            },
        });


      
        

        let mailOptions = {
            from:'m49261589@gmail.com',
            to: '',
            subject: `Your verification emojies:  ${verification_code}`,

        };

        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to send email');
    }
};
exports.sendEmailTo = async (req, res) => {
    const { to, verification_code } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'm49261589@gmail.com', 
                pass: 'uvga jxim dorr vupk'   
            },
        });
      
        

        let mailOptions = {
            from:'m49261589@gmail.com',
            to: to,
            subject: `Your verification emojies:  ${verification_code}`,

        };

        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to send email');
    }
};