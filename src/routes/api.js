import express from 'express';
import userController from '../controllers/userController';
import userHobbiesValidator from '../validators/userHobbiesValidator';
const router = express.Router({});

/**
* @swagger
* /api/register:
*   post:
*     summary: Create user.
*     tags: [Create user.]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*                     name:
*                       type: string
*                       description: Name of the user.
*                       example: Mashood Rafi
*/
router.post('/register', userHobbiesValidator.validateCreateUser, userController.createUser);


/**
* @swagger
* /api/user/hobbies:
*   post:
*     summary: Save user hobbies.
*     tags: [Save user hobbies]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*                     userId:
*                       type: string
*                       description: The user ID.
*                       example: 6338fe668d284815fbc99b7e
*                     hobbieName:
*                       type: string
*                       description: Nme of the hobby.
*                       example: Cooking
*                     passionLevel:
*                       type: string
*                       description: Level of passion
*                       example: Among these "VERY LOW","LOW","MEDIUM","HIGH","VERY HIGH"
*                     year:
*                       type: number
*                       description: Year in which passion was developed
*                       example: 2005
*/
router.post('/user/hobbies', userHobbiesValidator.validatePayloadForSavingUserHobbies, userController.saveUserHobbies);


/**
 * @swagger
 * /api/user/hobbies:
 *  get:
 *    tags: [Get user hobbies]
 *    description: Get user hobbies
 *    parameters:
 *      - in : query
 *        name: userId
 *        description: id of user
 *        required: true
 */
router.get('/user/hobbies', userHobbiesValidator.validateUserId, userController.getUserHobbies);

/**
* @swagger
* /api/user/hobbies:
*   delete:
*     summary: Delete user hobbies.
*     tags: [Delete user hobbies]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*                     userId:
*                       type: string
*                       description: The user ID.
*                       example: 6338fe668d284815fbc99b7e
*                     hobbyId:
*                       type: string
*                       description: Id of the hobby.
*                       example: 6338fe8d8d284815fbc99b83
*/
router.delete('/user/hobbies', userHobbiesValidator.validateUserIdHobbyId, userController.deleteUserHobby);

module.exports = router;
