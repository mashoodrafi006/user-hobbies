import userService from "../services/userService";
import { USER_CREATED, USER_ALREADY_EXISTS, ERROR, USER_HOBBIES_SAVED, USER_HOBBIES, DELETE_USER_HOBBIES } from "../constants/response";
const userController = {};

userController.createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = await userService.createUser(name);

        return res.json(USER_CREATED(userId));
    } catch (error) {
        if (error.code === 11000) {
            return res.json(USER_ALREADY_EXISTS());
        }

        return res.json(ERROR);
    }
}

userController.saveUserHobbies = async (req, res) => {
    try {
        const { userId, hobbieName, passionLevel, year } = req.body;

        await userService.saveUserHobbies({ userId, hobbieName, passionLevel, year });

        return res.json(USER_HOBBIES_SAVED());
    } catch (error) {
        return res.json(ERROR);
    }
}

userController.getUserHobbies = async (req, res) => {
    try {
        const { userId } = req.query;
        const hobbies = await userService.getUserHobbies(userId);

        return res.json(USER_HOBBIES(hobbies));
    } catch (error) {
        return res.json(ERROR);
    }
}

userController.deleteUserHobby = async (req, res) => {
    try {
        const { userId, hobbyId } = req.body;
        await userService.deleteUserHobby({ userId, hobbyId });

        return res.json(DELETE_USER_HOBBIES());
    } catch (error) {
        return res.json(ERROR);
    }
}

export default userController;