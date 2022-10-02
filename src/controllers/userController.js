import userService from "../services/userService";
import { API_STATUS_CODES, RESPONSE_MESSAGES } from "../constants";
const userController = {};

userController.createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = await userService.createUser(name);

        return res.json({ status: API_STATUS_CODES.SUCCESS, message: RESPONSE_MESSAGES.SUCCESS, userId });
    } catch (error) {
        if (error.code === 11000) {
            return res.json({ status: API_STATUS_CODES.DUPLICATE_ENTRY, message: RESPONSE_MESSAGES.REQUEST_FAILED, userId: null });
        }

        return res.json({ status: API_STATUS_CODES.INTENAL_SERVER_ERROR, message: RESPONSE_MESSAGES.REQUEST_FAILED, userId: null });
    }
}

userController.saveUserHobbies = async (req, res) => {
    try {
        const { userId, hobbieName, passionLevel, year } = req.body;

        await userService.saveUserHobbies({ userId, hobbieName, passionLevel, year });

        return res.json({ status: API_STATUS_CODES.SUCCESS, message: RESPONSE_MESSAGES.SUCCESS, userId });
    } catch (error) {
        return res.json({ status: API_STATUS_CODES.INTENAL_SERVER_ERROR, message: RESPONSE_MESSAGES.REQUEST_FAILED, userId: null });
    }
}

userController.getUserHobbies = async (req, res) => {
    try {
        const { userId } = req.query;
        const hobbies = await userService.getUserHobbies(userId);

        return res.json({ status: API_STATUS_CODES.SUCCESS, message: RESPONSE_MESSAGES.SUCCESS, hobbies });
    } catch (error) {
        return res.json({ status: API_STATUS_CODES.INTENAL_SERVER_ERROR, message: RESPONSE_MESSAGES.REQUEST_FAILED, userId: null });
    }
}

userController.deleteUserHobby = async (req, res) => {
    try {
        const { userId, hobbyId } = req.body;
        await userService.deleteUserHobby({ userId, hobbyId });

        return res.json({ status: API_STATUS_CODES.SUCCESS, message: RESPONSE_MESSAGES.SUCCESS });
    } catch (error) {
        return res.json({ status: API_STATUS_CODES.INTENAL_SERVER_ERROR, message: RESPONSE_MESSAGES.REQUEST_FAILED, userId: null });
    }
}

export default userController;