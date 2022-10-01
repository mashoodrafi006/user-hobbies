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

export default userController;