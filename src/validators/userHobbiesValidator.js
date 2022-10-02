import { ERROR, INVALID_REQUEST } from "../constants/response";
import { validPassionLevels } from "../constants/index";
import mongoose from "mongoose";
const userHobbiesValidator = {};

userHobbiesValidator.validateCreateUser = (req, res, next) => {
    try {
        const { name } = req.body;
        /**
         * Request payload should contain `name`
        */
        if (typeof name === 'string') {
            next();
        } else {
            return res.json(INVALID_REQUEST("Invalid username"));
        }
    } catch (error) {
        return res.json(ERROR);
    }
}

userHobbiesValidator.validatePayloadForSavingUserHobbies = (req, res, next) => {
    try {
        const { userId, hobbieName, passionLevel, year } = req.body;

        /**
        * Payload should contain `userId`, `hobbieName`, `passionLevel`, `year`.
        */
        if (userId != null && mongoose.Types.ObjectId.isValid(userId) && hobbieName != null && typeof hobbieName === 'string' &&
            passionLevel != null && validPassionLevels.includes(passionLevel)
        ) {
            next();
        } else {
            return res.json(INVALID_REQUEST("Request body should contain following keys: userId, hobbieName, passionLevel, year. Passion levels should be: " + validPassionLevels));
        }
    } catch (error) {
        return res.json(ERROR);
    }
}

export default userHobbiesValidator;