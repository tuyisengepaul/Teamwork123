import articles from '../models/articles';
import IdProider from '../helpers/idprovider';
import returnFc from '../helpers/returnFc';


/**
 * @description classs this class contains methods for manipulating articles,
 * (Create new article, edit an article and delete);
 */
class allAboutArticle {
  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   */
  static newArticle(req, res) {
    let todayDate = new Date();
    const data = {
      id: IdProider(articles),
      creatorid: req.user.id,
      title: req.body.title,
      article: req.body.article,
      createdOn: todayDate,
      flag: 0,
    };
    articles.push(data);
    returnFc(req, res, '201', 'article successfuly created', data);
  }

  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   * @description this method allows a user to edit his own article
   */
  static editArticle(req, res) {
    const { flag } = req.params;
    const articleid = parseInt(req.params.id, 10);
    let message = '';
    articles.map((article) => {
      if (flag && article.id === articleid) {
        article.flag += 1;
        message = 'Article flagged successfuly';
      } else if (article.id === articleid) {
        article.title = req.body.title;
        article.article = req.body.article;
        message = 'Article updated successfuly';
      }
    });
    returnFc(req, res, '200', message);
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
    returnFc(req, res, '200', message);
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
    returnFc(req, res, '200', 'success', data);
  }

  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   * @description This method is used to get my articles
   */
  static myArticle(req, res) {
    const myArticles = articles.filter((article) => {
      if (article.creatorid === req.user.id) {
        return true;
      }
    });
    returnFc(req, res, '200', 'success', myArticles);
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
    returnFc(req, res, '200', 'success', data);
  }
}

export default allAboutArticle;
