import express from 'express';
import Users from '../controllers/users';
import loggedInUser from '../middleware/loggedInUser';
import tokenVerification from '../middleware/tokenVerification';

const router = express.Router();

router.get('/auth/', tokenVerification, loggedInUser.isAdmin, Users.AllUsers);
router.post('/auth/signup', Users.register);
router.post('/auth/signin', Users.signin);

export default router;
