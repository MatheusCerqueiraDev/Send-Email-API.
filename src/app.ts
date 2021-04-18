import cors from 'cors';
import express from 'express';
import { sendEmail } from './routes/send-email';

const app = express();

app.use(cors());

app.use(express.json());

app.post('/', (req, res) => {
  const {
    name,
    surname,
    subject,
    description,
    projectIdea,
    email,
  } = req.body;

  sendEmail(
    name,
    surname,
    subject,
    description,
    projectIdea,
    email,
  );

  res.send({
    name: name,
    surname: surname,
    subject: subject,
    description: description,
    projectIdea: projectIdea,
    email:email,
  });
});

export { app };

