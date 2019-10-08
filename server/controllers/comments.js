import comments from '../models/comments';
import articles from '../models/articles';
import IdProider from '../helpers/idprovider';
import returnFc from '../helpers/returnFc';

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
  static createComment(req, res) {
    const articleid = parseInt(req.params.id, 10);
    let existArticle = '';
    articles.map((article) => {
      if (article.id === articleid) {
        existArticle = article;
      }
    });
    let todayDate = new Date();
    const data = {
      id: IdProider(comments),
      articleId: existArticle.id,
      comment: req.body.comment,
      createdOn: todayDate,
      status: 'unflagging',
    };
    const returndata = {
      createdOn: data.createdOn,
      articleTitle: existArticle.title,
      article: existArticle.article,
      comment: data.comment,
      status: 'unflagging',
    };
    comments.push(data);
    returnFc(req, res, '201', 'comment added', returndata);
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

    returnFc(req, res, '200', message);
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
    comments.map((comment1, index) => {
      if (comment1.id === commentid && comment1.flag > 0) {
        comments.splice(index, 1);
        message = 'comment deleted successfuly';
      }
    });
    returnFc(req, res, '200', message);
  }
}

export default comment;
