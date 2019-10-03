import jwt from 'jsonwebtoken';

const Token = (payLoad) => {
  const Newtoken = jwt.sign({ payLoad }, process.env.TOKEN_KEYS, {
    expiresIn: '24h',
  });
  return Newtoken;
};
export default Token;
