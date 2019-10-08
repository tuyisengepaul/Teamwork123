import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import users from '../models/users';
import returnFc from '../helpers/returnFc';

dotenv.config();
const isLoggedin = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    returnFc(req, res, '401', 'Please Set The Authorization Header!');
  }
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    returnFc(req, res, '401', 'No token provided, Access Denied!');
  }

  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_KEYS);
    let userData = '';
    users.map((user) => {
      if (user.email === decodedToken.payLoad) {
        userData = user;
      }
    });
    req.user = userData;
    return next();
  } catch (error) {
    returnFc(req, res, '401', 'You provided the invalid token!');
  }
};
export default isLoggedin;
