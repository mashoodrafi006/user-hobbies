import userMongoModel from "../models/users";
const userRepository = {}

userRepository.createUser = async (name) => {
    try {
        const user = await userMongoModel.create({ name });

        return user._id;
    } catch (error) {
        throw error;
    }
}

export default userRepository;