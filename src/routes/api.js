import express from 'express';
import userController from '../controllers/userController';
const router = express.Router({});

router.post('/register', userController.createUser);

module.exports = router;