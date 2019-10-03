import Joi from '@hapi/joi';
import customize from './Customize';

const valid = (req, res, next, schema) => {
  const { error } = Joi.validate(req.body, schema);
  if (error) {
    return customize.validateError(req, res, error, 400);
  }
  return next();
};

export default valid;
