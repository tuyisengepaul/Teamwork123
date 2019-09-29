import express from 'express';
import comment from '../controllers/comments';
import tokenVerification from '../middleware/tokenVerification';
import paramCheck from '../middleware/parameterCheck';

const router = express.Router();
 
router.post('/commentes/:id',tokenVerification, paramCheck.parameterCheck, comment.createComment); 
router.patch('/commentes/:id',tokenVerification, paramCheck.parameterCheck, comment.flagComment);

export default router;