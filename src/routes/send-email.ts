import nodemailer from 'nodemailer';

require('dotenv').config();

export interface ProcessEnv {
  [key: string]: string | undefined;
}

export const sendEmail = (
    name,
    surname,
    subject,
    description,
    projectIdea,
    email,
) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    cc: email,
    subject: subject,
    html:
      '<p>Hey my name is ' +
      name + surname +
      ' and I have a ideia: </p> ' +
      '<p>I' +
      projectIdea +
      ' and here is my explanation: </p>  ' +
      description
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err + 'sended email fail');
    } else {
      console.log('Email sended 🚀');
    }
  });
};
