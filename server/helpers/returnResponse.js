const returnResponse = (req, res, code, msg, dta) => {
  return res.status(code).json({
    status: code,
    message: msg,
    data: dta,
  });
};

export default returnResponse;
