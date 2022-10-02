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

export default userRepository;