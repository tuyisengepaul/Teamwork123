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
      return returnResponse(req, res, 200, 'article updated successfuly', result.rows[0]);
    }
    let flagIt = await Database.selectBy('articles', 'creatorid', articleid);
    flagIt.rows[0].flag += 1;
    const result = await Database.updateOne('articles', 'flag', flagIt.rows[0].flag, 'id', articleid);
    return returnResponse(req, res, 200, 'article flagged successfuly', flagIt.rows[0].flag);
  }

  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   * @description This method in the action of deleting an article
   */
  static async deleteArticle(req, res) {
    const articleid = parseInt(req.params.id, 10);
    const result = await Database.delete('articles', 'id', articleid);
    return returnResponse(req, res, 200, 'article deleted successfuly');
  }

  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   * @description This method is used to get all articles
   */
  static async getAllarticle(req, res) {
    const data = await Database.selectAllOrderBy('articles', 'createdOn', 'desc');
    return returnResponse(req, res, 200, 'success', data.rows);
  }

  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   * @description This method is used to get a specific article
   */
  static async getSpecificArticle(req, res) {
    const articleid = parseInt(req.params.id, 10);

    const data = await Database.selectBy('articles', 'id', articleid);
    return returnResponse(req, res, 200, 'success', data.rows);
  }

  /**
   * @author Tuyisenge J.Paul
   * @param {object} req
   * @param {object} res
   * @description This method is used to get my articles
   */
  static async myArticle(req, res) {
    const data = await Database.selectBy('articles', 'creatorid', req.user.id);
    returnResponse(req, res, '200', 'success', data.rows);
  }
}

export default allAboutArticle;
