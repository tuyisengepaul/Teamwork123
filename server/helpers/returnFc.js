
const returnFc = (req, res, code, msg, dta) => {
  if (dta) {
    res.status(code).json({
      status: code,
      message: msg,
      data: dta,
    });
  }
};

export default returnFc;
