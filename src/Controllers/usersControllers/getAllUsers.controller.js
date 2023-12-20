import { registerUserModel } from "../../Models/RegisterUser.model.js";

const getAllUsers =async (req, res) => {
    try {
        const allusers = await registerUserModel.find({})
    //    res.json({
    //     message:'All users are sent from the database..',
    //     status:200,
    //     allusers
    //    })
    res.send(allusers)
    } catch (error) {
        console.error(error);
    }
}

export default getAllUsers