import e from "express";
import { Signin, Signup } from "../controllers/authController.js";
const router=e.Router();

    router.post('/signup',Signup);
    router.post('/signin',Signin);

export default router;