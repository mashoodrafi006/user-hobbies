import { ERROR, INVALID_REQUEST } from "../constants/response";
const userHobbiesValidator = {};

userHobbiesValidator.validateCreateUser = (req, res, next) => {
    try {
        const { name } = req.body;
        if (typeof name === 'string') {
            next();
        } else {
            return res.json(INVALID_REQUEST("Invalid username"));
        }
    } catch (error) {
        return res.json(ERROR);
    }
}

export default userHobbiesValidator;