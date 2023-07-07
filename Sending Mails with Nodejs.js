// JavaScript source code

/*
Write me a script that can helps send a customized
mail to a friend and send the screenshot of the
recieved mail. 
*/

let mailSender = require('nodemailer');

let mailTransporter = mailSender.createTransport(
    {
        service: "gmail",
        auth: {
            user: 'bayodeblessingakinbola@gmail.com',
            pass: 'Hmmmm'
        }
    }
);

let receiver = {
    from: "bayodeblessingakinbola@gmail.com",
    to: "BLESSING.BAYODE@ekitidigitalskillacademy.com",
    subject: "Node Mailer Assignment",
    html: `<h2>Hi Friend!</h2><br />
    I will like to inform you that I'm almost done with my Backend Development Learning Program in Ekiti State Digital Skilling Academy (EDSA), and it's a very glorious but stressful experience.<br /><br />
    Thanks for your supports always!<br /> <br />
    Best regards!
    `
};

mailTransporter.sendMail(receiver, (error, res) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Email sent: ".concat(res.response));
    }
});
