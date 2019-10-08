import artcles from '../models/articles';
import commentes from '../models/comments';
import returnResponse from '../helpers/returnResponse';

class loggedinUser {
  static isAllowedToDcmt(req, res, next) {
    let message = '';
    const id = parseInt(req.params.id, 10);
    commentes.map((comment) => {
      if (req.user.type === 'admin' && comment.flag > 0 && comment.id === id) {
        message = 'ok';
      }
    });

    if (message !== 'ok') {
      return returnResponse(req, res, '403', 'You are not allowed this kind of request');
    }
    return next();
  }

  static isAllowed(req, res, next) {
    let message = '';
    const id = parseInt(req.params.id, 10);
    artcles.map((article) => {
      if (req.user.type === 'admin' && article.flag > 0 && article.id === id) {
        message = 'ok';
      } else if (article.creatorid === req.user.id && article.id === id) {
        message = 'ok';
      } else message = '';
    });
    if (message !== 'ok') {
      returnResponse(req, res, '403', 'You are not allowed this kind of request');
    } else {
      return next();
    }
  }

  static isAllowedToEdit(req, res, next) {
    let message = '';
    const id = parseInt(req.params.id, 10);
    artcles.map((article) => {
      if (article.creatorid === req.user.id && article.id === id) {
        message = 'ok';
      }
    });
    if (message !== 'ok') {
      returnResponse(req, res, '403', 'you are not allowed to edit others article');
    } else {
      return next();
    }
  }

  static isAdmin(req, res, next) {
    if (req.user.type !== 'admin') {
      return returnResponse(req, res, '403', 'You are not allowed this kind of request, Only Admin');
    }
    return next();
  }
}

export default loggedinUser;
