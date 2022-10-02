import userRepository from "../repositories/userRepository";
import hobbiesService from "../services/hobbiesService";
import userHobbiesFactory from "../factories/userHobbies";
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

userService.getUserHobbies = async (userId) => {
    try {
        const userHobbies = await userRepository.getUserHobbies(userId);
        const userHobbiesResponse = userHobbiesFactory.buildResponseForUserHobbies(userHobbies);

        return userHobbiesResponse;
    } catch (error) {
        throw error;
    }
}

userService.deleteUserHobby = async (userHobbyToRemove) => {
    try {
        await userRepository.deleteUserHobby(userHobbyToRemove);
    } catch (error) {
        throw error;
    }
}

export default userService;