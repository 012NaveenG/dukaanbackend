import { Router } from "express";
import registerUser from "../Controllers/usersControllers/registerUser.controller.js";
import loginUser from "../Controllers/usersControllers/loginUser.controller.js";
import logoutUser from "../Controllers/usersControllers/logoutUser.controller.js";
import getAllUsers from "../Controllers/usersControllers/getAllUsers.controller.js";
const router = Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route('/allusers').get(getAllUsers)
export default router