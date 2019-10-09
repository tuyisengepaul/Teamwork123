import Database from '../database/dbquerie';
import returnResponse from '../helpers/returnResponse';
/**
 * @description classs this class contains methods for manipulating articles,
 * (Create new article, edit an article, flag an article and delete it);
 */
class allAboutArticle {
  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   */
  static async newArticle(req, res) {
    let todayDate = new Date();
    const data = {
      creatorid: req.user.id,
      title: req.body.title,
      article: req.body.article,
      createdOn: todayDate,
      flag: 0,
    };
    const result = await Database.createArticle(data);
    return returnResponse(req, res, 201, 'article successfuly created', result.rows[0]);
  }

  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   * @description this method allows a user to edit his own article
   */
  static async editArticle(req, res) {
    let { flag } = req.params;
    const articleid = parseInt(req.params.id, 10);
    if (!flag) {
      const result = await Database.update('articles', 'title', req.body.title, 'article', req.body.article, 'id', articleid);
      return returnResponse(req, res, 201, 'article updated successfuly', result.rows[0]);
    }
    let flagIt = await Database.selectBy('articles', 'creatorid', articleid);
    flagIt.rows[0].flag += 1;
    const result = await Database.updateOne('articles', 'flag', flagIt.rows[0].flag, 'id', articleid);
    return returnResponse(req, res, 201, 'article flagged successfuly', flagIt.rows[0].flag);
  }

  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   * @description This method in the action of deleting an article
   */
  static deleteArticle(req, res) {
    const articleid = parseInt(req.params.id, 10);
    let message = '';
    articles.map((article, index) => {
      if (article.id === articleid) {
        articles.splice(index, 1);
        message = 'Article deleted successfuly';
      }
    });
    if (message) {
      return res.status(200).json({
        status: '200',
        message,
      });
    }
    return res.status(404).json({
      status: '404',
      message: 'Article not found',
    });
  }

  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   * @description This method is used to get all articles
   */
  static getAllarticle(req, res) {
    const data = articles.sort((a, b) => {
      const dateA = new Date(a.createdOn);
      const dateB = new Date(b.createdOn);
      return dateB - dateA;
    });
    return res.status(200).json({
      status: '200',
      message: 'success',
      data,
    });
  }

  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   * @description This method is used to get a specific article
   */
  static getSpecificArticle(req, res) {
    const articleid = parseInt(req.params.id, 10);
    let data = '';
    articles.map((article) => {
      if (article.id === articleid) {
        data = article;
      }
    });
    if (data) {
      return res.status(200).json({
        status: '200',
        data,
      });
    }
    return res.status(404).json({
      status: '404',
      message: 'Article not found',
    });
  }
}

export default allAboutArticle;
