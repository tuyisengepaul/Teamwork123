import jwt from 'jsonwebtoken';

const Token = (payLoad) => {
  const Newtoken = jwt.sign({ payLoad }, process.env.tokenKeys, {
    expiresIn: '24h',
  });
  return Newtoken;
};

export default Token;