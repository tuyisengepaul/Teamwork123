import Database from '../database/dbquerie';
import returnResponse from '../helpers/returnResponse';
/**
 * @author Tuyisenge Jean Paul
 * @description the class comment contains method for creating a comment, flag and delete a comment/
 */
class comment {
  /**
   *@author Jean Paul Tuyisenge
   * @param {object} req
   * @param {object} res
   * @description Thi is the method for creating a comment /
   */
  static async createComment(req, res) {
    const articleid = parseInt(req.params.id, 10);
    let todayDate = new Date();
    const data = {
      articleId: articleid,
      comment: req.body.comment,
      createdOn: todayDate,
      flag: 0,
    };
    const result = await Database.createComment(data);
    const resultArticle = await Database.selectBy('articles', 'id', articleid);
    return returnResponse(req, res, 201, 'Comment Added succesfully', {
      createdOn: data.createdOn,
      articleTitle: resultArticle.rows[0].title,
      article: resultArticle.rows[0].article,
      comment: data.comment,
      flag: data.flag,
    });
  }

  /**
 * @author Tuyisenge Jean Paul
 * @param {object} req
 * @param {object} res
 * @description This methods alow the user to flag a comment/
 */
  static flagComment(req, res) {
    const id = parseInt(req.params.id, 10);
    let message = '';
    comments.map((comment) => {
      if (comment.id === id) {
        comment.flag += 1;
        message = comment;
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
      message: 'comment not found',
    });
  }

  /**
   *@author Jean Paul Tuyisenge
   * @param {object} req
   * @param {object} res
   * @description This method allows admin to delete a flaged comment
   */
  static deleteComment(req, res) {
    const commentid = parseInt(req.params.id, 10);
    let message = '';
    comments.map((comment, index) => {
      if (comment.id === commentid && comment.flag > 0) {
        comments.splice(index, 1);
        message = 'comment deleted successfuly';
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
      message: 'Imposible to delete unflagging or unexistence comment',
    });
  }
}

export default comment;
