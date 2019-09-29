import jwt from 'jsonwebtoken';
import tokenKeys from '../config/keys';


const Token = (payLoad) => {
  const Newtoken = jwt.sign({ payLoad }, tokenKeys, {
    expiresIn: '24h',
  });
  return Newtoken;
};

export default Token;