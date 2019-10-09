import express from 'express';
import articles from '../controllers/articles';
import loggedInUser from '../middleware/loggedInUser';
import tokenVerification from '../middleware/tokenVerification';
import paramCheck from '../middleware/parameterCheck';
import Validate from '../middleware/validation';
import Availability from '../middleware/Availability';


const router = express.Router();


router.post('/articles', tokenVerification, Validate.newArticle, Availability.articleExist, articles.newArticle);
router.get('/articles', tokenVerification, articles.getAllarticle);
router.get('/myarticles', tokenVerification, Availability.available, articles.myArticle);
router.get('/articles/:id', tokenVerification, paramCheck.parameterCheck, Availability.articleNotFound, articles.getSpecificArticle);
router.patch('/articles/:id/:flag', tokenVerification, paramCheck.parameterCheckFlag, Availability.articleNotFound, articles.editArticle);
router.patch('/articles/:id', tokenVerification, loggedInUser.isAllowedToEdit, paramCheck.parameterCheck, Availability.articleNotFound, articles.editArticle);
router.delete('/articles/:id', tokenVerification, paramCheck.parameterCheck, loggedInUser.isAllowed, Availability.articleNotFound, articles.deleteArticle);

export default router;
