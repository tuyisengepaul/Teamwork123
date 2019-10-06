import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger';
import usersRouter from './routes/users';
import articleRouter from './routes/articles';
import comment from './routes/comments';


const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1', usersRouter);
app.use('/api/v1', articleRouter);
app.use('/api/v1', comment);
app.all('/', (_req, res) => {
  let message = ' Welcome to Team work. ';
  message += 'The goal of this application is to facilitate more interaction between colleagues and facilitate team bonding.';
  res.status(200).send({ message });
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use((_req, _res, next) => {
  const error = new Error('Bad url');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status);
  res.json({
    status: '404',
    error: error.message,
  });
});

export default app;
