import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from '../server/routes/users';
import articleRouter from '../server/routes/articles';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/v1', usersRouter);
app.use('/api/v1', articleRouter);

app.use((req, _res, next) => {
  const error = new Error('Bad url ');
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