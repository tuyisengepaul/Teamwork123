import express from 'express';
import Users from '../controllers/users';
import loggedInUser from '../middleware/loggedInUser';
import tokenVerification from '../middleware/tokenVerification';
import Validate from '../middleware/validation';
import Availability from '../middleware/Availability';

const router = express.Router();

router.get('/auth/', tokenVerification, loggedInUser.isAdmin, Users.AllUsers);
router.post('/auth/signup', Validate.userRegister, Availability.userExist, Users.register);
router.post('/auth/signin', Validate.UserSignin, Availability.signin, Users.signin);

export default router;
