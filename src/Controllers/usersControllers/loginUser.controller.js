
import jwt from 'jsonwebtoken'
import { registerUserModel } from '../../Models/RegisterUser.model.js';

const loginUser = async (req, res) => {
    // console.log(req.body.username);
    try {
        const { username,password } = req.body
        const response = await registerUserModel.find({ Username: `${username}`,Password:`${password}` })

        if (response[0]) {
            const token = jwt.sign({ name: toString(req.body.username) }, process.env.JWT_SECRET_KEY, {
                expiresIn: '7d'
            })
            res.json({
                message: 'LoggedIn Successful',
                token: token,
                Avatar:response[0].Avatar
               
            })
        } else {
            res.json({
                message: 'Invalid Credentials',
                invalidCredentials: true
            })
        }
    } catch (error) {
        console.error(error);
    }
}
export default loginUser