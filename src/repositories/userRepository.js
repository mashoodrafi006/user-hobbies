import userMongoModel from "../models/users";
import mongoose from "mongoose";
const userRepository = {}


/**
 * Create user.
*/
userRepository.createUser = async (name) => {
    try {
        const user = await userMongoModel.create({ name });

        return user._id;
    } catch (error) {
        throw error;
    }
}

/**
 * Add reference of hobby with user.
*/
userRepository.saveHobbyReferenceInUser = async (userHobby) => {
    try {

        await userMongoModel.updateOne({ _id: userHobby.userId }, { $addToSet: { hobbies: userHobby.hobbyId } });

    } catch (error) {
        throw error;
    }
}

/**
 * Get all user hobbies.
*/
userRepository.getUserHobbies = async (userId) => {
    try {
        let userWithHobbies = [];
        if (mongoose.Types.ObjectId.isValid(userId)) {
            userWithHobbies = await userMongoModel.aggregate([
                { $match: { _id: mongoose.Types.ObjectId(userId) } },
                { $lookup: { from: "hobbies", localField: "hobbies", foreignField: "_id", as: "userHobbies" } },
            ]);
        }
        return userWithHobbies.length ? userWithHobbies[0].userHobbies : [];
    } catch (error) {
        throw error;
    }
}

/**
 * Check whether hobby name is already associated with user. 
*/
userRepository.getUserHobbyByName = async (hobbyDetails) => {
    try {
        let userWithHobbies = [];
        if (mongoose.Types.ObjectId.isValid(hobbyDetails.userId)) {
            userWithHobbies = await userMongoModel.aggregate([
                { $match: { _id: mongoose.Types.ObjectId(hobbyDetails.userId) } },
                { $lookup: { from: "hobbies", localField: "hobbies", foreignField: "_id", as: "userHobbies" } },
                { $match: { "userHobbies.name": { $in: [hobbyDetails.hobbieName] } } },
            ]);
        }
        return userWithHobbies.length ? true : false;
    } catch (error) {
        throw error;
    }
}

/**
 * @description: Delete user hobby.
*/
userRepository.deleteUserHobby = async (userHobbyToRemove) => {
    try {
        if (mongoose.Types.ObjectId.isValid(userHobbyToRemove.userId) && mongoose.Types.ObjectId.isValid(userHobbyToRemove.hobbyId)) {
            await userMongoModel.updateOne({ _id: userHobbyToRemove.userId }, { $pull: { hobbies: userHobbyToRemove.hobbyId } });
        }
    } catch (error) {
        throw error;
    }
}

export default userRepository;