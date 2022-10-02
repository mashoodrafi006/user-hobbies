import express from 'express';
import userController from '../controllers/userController';
const router = express.Router({});

router.post('/register', userController.createUser);
router.post('/user/hobbies', userController.saveUserHobbies);
router.get('/user/hobbies', userController.getUserHobbies);
router.delete('/user/hobbies', userController.deleteUserHobby);

module.exports = router;
