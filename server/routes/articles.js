import express from 'express';
import articles from '../controllers/articles';
import loggedInUser from '../middleware/loggedInUser';
import tokenVerification from '../middleware/tokenVerification';
import paramCheck from '../middleware/parameterCheck';

const router = express.Router();


router.post('/articles', tokenVerification, articles.newArticle);
router.get('/articles',tokenVerification, articles.getAllarticle);
router.get('/articles/:id',tokenVerification,paramCheck.parameterCheck, articles.getSpecificArticle);
router.patch('/articles/:id/:flag', tokenVerification, paramCheck.parameterCheckFlag, articles.editArticle);
router.patch('/articles/:id', tokenVerification, loggedInUser.isAllowedToEdit, paramCheck.parameterCheck, articles.editArticle);

export default router;
