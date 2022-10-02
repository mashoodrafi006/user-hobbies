import userMongoModel from "../models/users";
import mongoose from "mongoose";
const userRepository = {}

userRepository.createUser = async (name) => {
    try {
        const user = await userMongoModel.create({ name });

        return user._id;
    } catch (error) {
        throw error;
    }
}

userRepository.saveHobbyReferenceInUser = async (userHobby) => {
    try {
        
        await userMongoModel.updateOne({ _id: userHobby.userId }, { $addToSet: { hobbies: userHobby.hobbyId } });

    } catch (error) {
        throw error;
    }
}

export default userRepository;