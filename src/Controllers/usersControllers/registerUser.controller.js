import { registerUserModel } from "../../Models/RegisterUser.model.js";
import { v2 as cloudinary } from 'cloudinary';
import Dotenv from "dotenv";
Dotenv.config('../.env')

cloudinary.config({
   cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
   api_key:`${process.env.CLOUDINARY_API_KEY}`,
   api_secret: `${process.env.CLOUDINARY_API_SECRET}`
});


const registerUser =
    async (req, res) => {
        const { FirstName, LastName, Contact, Email, Username, Password, Avatar } = req.body
        const { tempFilePath } = req.files.Avatar
        console.log(tempFilePath);


        try {
            const findUser = await registerUserModel.find({ Username })
            if (findUser[0]) {
                res.json({
                    message: 'User Already Exists',
                    userExists: true
                })
            } else {
                await cloudinary.uploader.upload(tempFilePath, async (err, result) => {
                    res.json({
                        message: 'User Created Successfully!!',
                        userExists: false
                    })
                    await registerUserModel.create({
                        Avatar: result.url,
                        FirstName,
                        LastName,
                        Contact,
                        Email,
                        Username,
                        Password
                    })
                })

            }
        } catch (error) {
            console.error(error);
        }
    }

export default registerUser