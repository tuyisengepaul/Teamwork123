import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Database from '../database/dbquerie';

dotenv.config();
const isLoggedin = async (req, res, next) => {
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
    const decodedToken = jwt.verify(token, process.env.TOKEN_KEYS);
    const exitUser = await Database.selectBy('users', 'email', decodedToken.payLoad);
    
    req.user = exitUser.rows[0];
    return next();
  } catch (error) {
    return res.status(401).send({
      status: '401',
      error: 'You provided the invalid token!',
    });
  }
};
export default isLoggedin;
