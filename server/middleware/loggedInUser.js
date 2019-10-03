import artcles from '../models/articles';
import commentes from '../models/comments';

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
      return res.status(403).json({
        status: '403',
        message: 'you are not allowed this kind of request only admin',
      });
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
      }
    });
    if (message !== 'ok') {
      return res.status(403).json({
        status: '403',
        message: 'you are not allowed to edit others article',
      });
    }
    return next();
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
      return res.status(403).json({
        status: '403',
        message: 'you are not allowed to edit others article',
      });
    }
    return next();
  }

  static isAdmin(req, res, next) {
    if (req.user.type !== 'admin') {
      return res.status(403).json({
        status: '403',
        message: 'You are not allowed this kind of request, Only Admin',
      });
    }
    return next();
  }
}

export default loggedinUser;
