import express from 'express';
import articles from '../controllers/articles';
import tokenVerification from '../middleware/tokenVerification';

const router = express.Router();


router.post('/articles', tokenVerification, articles.newArticle); 

export default router;