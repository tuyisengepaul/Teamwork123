import incodePass from 'bcrypt';
import articles from '../models/articles';
import comments from '../models/comments';
import users from '../models/users';
import returnFc from '../helpers/returnFc';

const notfound = (req, res, next, message, data) => {
  const id = parseInt(req.params.id, 10);
  let searchData;
  data.map((item) => {
    if (item.id === id) {
      searchData = item;
    }
  });
  if (!searchData) {
    returnFc(req, res, 404, message);
  } else {
    return next();
  }
};

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
      returnFc(req, res, 404, 'No Article is yet created');
    } else {
      return next();
    }
  }

  static articleExist(req, res, next) {
    let message = '';
    articles.map((article) => {
      if (article.article === req.body.article) {
        message = 'This article alread exist';
      }
    });
    if (message) {
      returnFc(req, res, 409, message);
    } else {
      return next();
    }
  }

  static articleNotFound(req, res, next) {
    notfound(req, res, next, 'Article not found', articles);
  }

  static commentNotFound(req, res, next) {
    notfound(req, res, next, 'Comment not found', comments);
  }

  static commentExist(req, res, next) {
    const articleid = parseInt(req.params.id, 10);
    let message = '';
    comments.map((newcomment) => {
      if (req.body.comment === newcomment.comment && articleid === newcomment.articleId) {
        message = 'Alread exist';
      }
    });
    if (message) {
      returnFc(req, res, 409, message);
    } else {
      return next();
    }
  }

  static userExist(req, res, next) {
    let message = '';
    users.map((newUser) => {
      if (newUser.email === req.body.email) {
        message = 'user already exists';
      }
    });
    if (message) {
      returnFc(req, res, 409, message);
    } else {
      return next();
    }
  }

  static signin(req, res, next) {
    let data;
    users.map((user) => {
      if (user.email === req.body.email && incodePass.compareSync(req.body.password, user.password)) {
        data = user;
      }
    });
    if (!data) {
      returnFc(req, res, 404, 'User not found, Incorrect email or password');
    } else {
      return next();
    }
  }
}


export default Availability;
