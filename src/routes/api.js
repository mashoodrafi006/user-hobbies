import express from 'express';
import userController from '../controllers/userController';
const router = express.Router({});

router.post('/register', userController.createUser);
router.post('/user/hobby', userController.saveUserHobbies);

module.exports = router;
