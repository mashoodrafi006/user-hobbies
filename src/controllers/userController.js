import userService from "../services/userService";
const userController = {};

userController.createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = await userService.createUser(name);

        return res.json({ status: 200, message: "User created. ", userId });
    } catch (error) {
        if (error.code === 11000) {
            return res.json({ status: 502, message: "duplicate" });
        }

        return res.json({ status: 502, message: "Error " });
    }
}

export default userController;