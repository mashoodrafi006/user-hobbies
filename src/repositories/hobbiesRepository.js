import hobbiesMongoModel from "../models/hobbies";
const userRepository = {};

userRepository.createHobby = async (userHobby) => {
    try {
        const hobbyCreated = await hobbiesMongoModel.create({
            name: userHobby.hobbieName,
            passionLevel: userHobby.passionLevel,
            year: userHobby.year
        });

        return hobbyCreated._id;
    } catch (error) {
        throw error;
    }
}

userRepository.findHobbyIfAlreadyExists = async (hobbyDetails) => {
    try {
        const hobby = await hobbiesMongoModel.findOne({
            name: hobbyDetails.hobbieName,
            passionLevel: hobbyDetails.passionLevel,
            year: hobbyDetails.year
        });

        return hobby != null ? hobby._id : null
    } catch (error) {
        throw error;
    }
}

export default userRepository;