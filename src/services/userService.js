import userRepository from "../repositories/userRepository";
import hobbiesService from "../services/hobbiesService";
const userService = {};

userService.createUser = async (name) => {
    try {
        return await userRepository.createUser(name);

    } catch (error) {
        throw error;
    }
}

userService.saveUserHobbies = async (userHobbies) => {
    try {
        const hobbyId = await hobbiesService.createUserHobbies(userHobbies);
        await userRepository.saveHobbyReferenceInUser({ userId: userHobbies.userId, hobbyId: hobbyId });

    } catch (error) {
        throw error;
    }
}

export default userService;