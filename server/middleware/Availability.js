import incodePass from 'bcrypt';
import returnResponse from '../helpers/returnResponse';
import Database from '../database/dbquerie';
import notfound from '../helpers/notfound';
import alreadExist from '../helpers/alreadExist';

class Availability {
  static available(req, res, next) {
    notfound(req, res, next, 'No Article is yet created', 'articles', 'creatorid', req.user.id);
  }

  static articleExist(req, res, next) {
    alreadExist(req, res, next, 'This article alread exist', 'articles', 'article', req.body.article);
  }

  static articleNotFound(req, res, next) {
    const id = parseInt(req.params.id, 10);
    notfound(req, res, next, 'Article not found', 'articles', 'id', id);
  }

  static commentNotFound(req, res, next) {
    const id = parseInt(req.params.id, 10);
    notfound(req, res, next, 'Comment not found', 'comments', 'id', id);
  }

  static async commentExist(req, res, next) {
    const articleid = parseInt(req.params.id, 10);
    const result = await Database.selectBy2colum('comments', 'comment', '=', `${req.body.comment}`, 'articleid', articleid, 'and');
    if (result.rowCount > 0) {
      return returnResponse(req, res, 409, 'Comment alread exist');
    }
    return next();
  }

  static async userExist(req, res, next) {
    alreadExist(req, res, next, 'User already exists', 'users', 'email', req.body.email);
  }

  static async signin(req, res, next) {
    const existItem = await Database.selectBy('users', 'email', req.body.email);
    if (existItem.rowCount !== 0) {
      if (incodePass.compareSync(req.body.password, existItem.rows[0].password)) {
        return next();
      }
    }
    returnResponse(req, res, 404, 'User not found, Incorrect email or password');
  }
}


export default Availability;
