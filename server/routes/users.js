import express from 'express';
import Users from '../controllers/users';

const router = express.Router();

router.post('/auth/signup', Users.register);
router.post('/auth/signin', Users.signin);

export default router;
