import {
  article, comment, userSignup, userSignin,
} from '../helpers/validation';
import valid from '../helpers/validateFc';

/**
 * @author Jean Paul Tuyienge
 * @description this class contains methods for validating user inputs/
 */
class Validate {
  /**
     *
     * @param {object} req
     * @param {object} res
     * @param {} next
     */

  static newArticle(req, res, next) {
    valid(req, res, next, article);
  }

  static addComment(req, res, next) {
    valid(req, res, next, comment);
  }

  static userRegister(req, res, next) {
    valid(req, res, next, userSignup);
  }

  static UserSignin(req, res, next) {
    valid(req, res, next, userSignin);
  }
}
export default Validate;
