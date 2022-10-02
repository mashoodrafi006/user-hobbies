import express from 'express';
import userController from '../controllers/userController';
import userHobbiesValidator from '../validators/userHobbiesValidator';
const router = express.Router({});

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Create user
 *     tags: [Create user]
 *     parameters:
 *       - in: body
 *         name: name
 *         description: The user to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *           properties:
 *             name:
 *               type: string     
 *     responses:
 *       200:
 *         description: The user was successfully created
 *       500:
 *         description: Some server error
 */

router.post('/register', userHobbiesValidator.validateCreateUser, userController.createUser);


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
 *        description: id of post
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/user/hobbies', userHobbiesValidator.validateUserId, userController.getUserHobbies);

router.delete('/user/hobbies', userHobbiesValidator.validateUserIdHobbyId, userController.deleteUserHobby);

module.exports = router;
