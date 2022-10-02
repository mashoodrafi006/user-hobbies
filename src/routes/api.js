import express from 'express';
import userController from '../controllers/userController';
import userHobbiesValidator from '../validators/userHobbiesValidator';
const router = express.Router({});

router.post('/register', userHobbiesValidator.validateCreateUser, userController.createUser);
router.post('/user/hobbies', userController.saveUserHobbies);
router.get('/user/hobbies', userController.getUserHobbies);
router.delete('/user/hobbies', userController.deleteUserHobby);

module.exports = router;
