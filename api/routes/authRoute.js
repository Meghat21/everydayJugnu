import e from "express";
import { google, Signin, Signup } from "../controllers/authController.js";
const router=e.Router();

    router.post('/signup',Signup);
    router.post('/signin',Signin);
    router.post('/google',google);

export default router;