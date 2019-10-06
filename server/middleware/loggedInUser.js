import Database from '../database/dbquerie';

class loggedinUser {
  static async isAllowedToDcmt(req, res, next) {
    const id = parseInt(req.params.id, 10);
    const existComment = await Database.selectBy2colum('comments', 'flag', '>', 0, 'id', id, 'and');
    if (req.user.type === 'admin' && existComment.rowCount !== 0) {
      return next();
    }
    return res.status(403).json({
      status: '403',
      message: 'you are not allowed this kind of request only admin',
    });
  }

  static async isAllowed(req, res, next) {
    let message = '';
    const id = parseInt(req.params.id, 10);
    const existArticle = await Database.selectBy('articles', 'id', id);

    if (existArticle.rowCount === 0) {
      return res.status(404).json({
        status: '404',
        message: 'Article not found',
      });
    }

    if (req.user.type === 'admin' && existArticle.rows[0].flag > 0) {
      message = 'ok';
    } else if (existArticle.rows[0].creatorid === req.user.id) {
      message = 'ok';
    }
    if (message !== 'ok') {
      return res.status(403).json({
        status: '403',
        message: 'you are not allowed this kind if request',
      });
    }
    return next();
  }

  static async isAllowedToEdit(req, res, next) {
    const id = parseInt(req.params.id, 10);
    const existArticle = await Database.selectBy('articles', 'id', id);
    if (existArticle.rowCount === 0) {
      return res.status(404).json({
        status: '404',
        message: 'Article not found',
      });
    }

    if (existArticle.rows[0].creatorid === req.user.id) {
      return next();
    }
    return res.status(403).json({
      status: '403',
      message: 'you are not allowed to edit others article',
    });
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
