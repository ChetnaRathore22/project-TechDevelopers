import nodemailer from 'nodemailer';

var transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'rathorechetna03@gmail.com',
      pass: 'Rathore830'
    }
  });
  
  var mailOptions = {
    from: 'rathorechetna03.com',
    to: 'poojarajput9516@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 

 