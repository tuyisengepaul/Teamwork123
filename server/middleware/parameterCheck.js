import Joi from '@hapi/joi';
import { parameter, parameterFlag } from '../helpers/validation';
import customize from '../helpers/customize';

class paramCheck {
  static parameterCheck(req, res, next){
  const id = {
      id:req.params.id,
    };
  const { error } = Joi.validate(id, parameter);
  if (error) {
      return customize.validateError(req, res, error, 400);
    }
    return next();
  }
static parameterCheckFlag(req,res,next){
    const flagParams = {
        id:req.params.id,
        flag: req.params.flag,
      };
    const { error } = Joi.validate(flagParams, parameterFlag);
    if (error) {
      return customize.validateError(req, res, error, 400);
    }
    return next();
  }
}
export default paramCheck;
