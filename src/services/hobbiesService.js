import hobbiesRepository from "../repositories/hobbiesRepository";
const hobbiesService = {};

hobbiesService.createUserHobbies = async (userHobbies) => {
    try {
        const exisitingHobbyId = await hobbiesRepository.findHobbyIfAlreadyExists(userHobbies);

        if (exisitingHobbyId != null) return exisitingHobbyId;

        return await hobbiesRepository.createHobby(userHobbies);
    } catch (error) {
        throw error;
    }
}

export default hobbiesService;