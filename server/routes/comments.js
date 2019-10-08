import express from 'express';
import comment from '../controllers/comments';
import loggedInUser from '../middleware/loggedInUser';
import tokenVerification from '../middleware/tokenVerification';
import paramCheck from '../middleware/parameterCheck';
import Validate from '../middleware/validation';
import Availability from '../middleware/Availability';

const router = express.Router();
router.post('/comments/:id', tokenVerification, paramCheck.parameterCheck, Availability.articleNotFound, Availability.commentExist, Validate.addComment, comment.createComment);
router.patch('/comments/:id', tokenVerification, paramCheck.parameterCheck, Availability.commentNotFound, comment.flagComment);
router.delete('/comments/:id', tokenVerification, loggedInUser.isAllowedToDcmt, paramCheck.parameterCheck, comment.deleteComment);

export default router;
