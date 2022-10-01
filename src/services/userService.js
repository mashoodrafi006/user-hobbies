import userRepository from "../repositories/userRepository";
const userService = {};

userService.createUser = async (name) => {
    try {
        return await userRepository.createUser(name);
        
    } catch (error) {
        throw error;
    }
}

export default userService;