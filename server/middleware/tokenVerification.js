import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import users from '../models/users';

dotenv.config();
const isLoggedin = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    return res.status(401).send({
      status: '401',
      error: 'Please Set The Authorization Header!',
    });
  }
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).send({
      status: '401',
      error: 'No token provided, Access Denied!',
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.tokenKeys);
    let userData = '';
    users.map((user) => {
      if (user.email === decodedToken.payLoad) {
        userData = user;
      }
    });
    req.user = userData;
    return next();
  } catch (error) {
    return res.status(401).send({
      status: '401',
      error: 'You provided the invalid token!',
    });
  }
};
export default isLoggedin;
