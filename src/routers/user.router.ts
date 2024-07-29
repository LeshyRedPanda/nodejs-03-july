import {Router} from "express";

import {userController} from "../controllers/user.controller";
import {commonMiddleware} from "../middlewares/common.middleware";
import {UserValidator} from "../validators/user.validator";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();

router.get('/', userController.getList);

router.get('/:userId', commonMiddleware.isIdValid('userId'), userController.getById);



router.put('/:userId',
    authMiddleware.checkAccessToken,
    commonMiddleware.isIdValid('userId'),
    commonMiddleware.isBodyValid(UserValidator.updateUser),
    userController.updateById);
router.delete('/:userId', commonMiddleware.isIdValid('userId'), userController.deleteById);

export const userRouter = router ;