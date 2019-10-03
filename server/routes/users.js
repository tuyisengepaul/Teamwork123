import express from 'express';
import Users from '../controllers/users';
import loggedInUser from '../middleware/loggedInUser';
import tokenVerification from '../middleware/tokenVerification';
import Validate from '../middleware/validation';

const router = express.Router();

router.get('/auth/', tokenVerification, loggedInUser.isAdmin, Users.AllUsers);
router.post('/auth/signup', Validate.userRegister, Users.register);
router.post('/auth/signin', Validate.UserSignin, Users.signin);

export default router;
