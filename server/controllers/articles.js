/* eslint-disable space-before-blocks */
import Joi from '@hapi/joi';
import { article } from '../helpers/validation';
import customize from '../helpers/customize';
import articles from '../models/articles';
import IdProider from '../helpers/idprovider';

class allAboutArticle {
  static newArticle(req, res) {
    let message = '';
    const { error } = Joi.validate(req.body, article);
    if (error) {
      return customize.validateError(req, res, error, 400);
    }

    articles.map((article) => {
      if (article.title === req.body.title || article.article === req.body.article) {
        message = 'This article alread exist';
      }
    });
    if (message) {
      return res.status(409).json({
        status: '409',
        message,
      });
    }
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
    return res.status(201).json({
      status: '201',
      message: 'article successfuly created',
      data,
    });
  }

  static editArticle(req, res) {
    const { flag } = req.params;
    const articleid = parseInt(req.params.id, 10);
    let message = '';
    articles.map((article) => {
      if (flag && article.id === articleid){
        article.flag += 1;
        message = 'Article flagged successfuly';
      } else if (article.id === articleid) {
        article.title = req.body.title;
        article.article = req.body.article;
        message = 'Article updated successfuly'
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
      message: 'Article not found'
    });
}

}

export default allAboutArticle;
