/* eslint-disable no-useless-return */
import articles from '../models/articles';

class Availability {
  static available(req, res, next) {
    let message = '';
    let articleId = '';
    articles.map((article) => {
      if (req.user.id === article.creatorid) {
        message = 'ok';
        articleId = article.creatorid;
      }
    });

    if (message !== 'ok') {
      return res.status(404).json({
        status: '404',
        message: 'No Article is yet created',
      });
    }
    req.articleId = articleId;
    return next();
  }
}

export default Availability;
