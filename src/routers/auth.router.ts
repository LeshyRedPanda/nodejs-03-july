import {Router} from "express";
import {commonMiddleware} from "../middlewares/common.middleware";
import {UserValidator} from "../validators/user.validator";
import {authController} from "../controllers/auth.controller";

const router = Router();

router.post(
    '/sign-up',
    commonMiddleware.isBodyValid(UserValidator.createUser),
    authController.signUp);

export const authRouter = router;