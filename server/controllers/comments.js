import comments from '../models/comments';
import articles from '../models/articles';
import IdProider from '../helpers/idprovider';

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
    let message = '';
    articles.map((article) => {
      if (article.id === articleid) {
        existArticle = article;
      }
    });
    comments.map((newcomment) => {
      if (req.body.comment === newcomment.comment && articleid === newcomment.articleId) {
        message = 'Alread exist';
      }
    });
    if (message) {
      return res.status(409).json({
        status: '409',
        message,
      });
    }
    if (existArticle) {
      let todayDate = new Date();
      const data = {
        id: IdProider(comments),
        articleId: existArticle.id,
        comment: req.body.comment,
        createdOn: todayDate,
        status: 'unflagging',
      };
      comments.push(data);
      return res.status(201).json({
        status: '201',
        message: 'comment added',
        data: {
          createdOn: data.createdOn,
          articleTitle: existArticle.title,
          article: existArticle.article,
          comment: data.comment,
          status: 'unflagging',
        },
      });
    }

    return res.status(404).json({
      status: '401',
      message: 'Article not found',
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
