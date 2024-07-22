import express, {NextFunction, Request, Response} from "express";
import * as mongoose from "mongoose";
import {userRouter} from "./routers/user.router";
import {ApiError} from "./errors/api-error";
import {configs} from "./configs/configs";



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.use(
    '*',
    (err: ApiError, req: Request, res: Response, next: NextFunction) => {
        res.status(err.status || 500).json(err.message);
    }
);

process.on('uncaughtException', (e) => {
    console.error('uncaughtException', e.message, e.stack);
    process.exit(1);
})





app.listen(configs.APP_PORT, configs.APP_HOST, async () => {
    await mongoose.connect(configs.MONGO_URL)
    console.log(`server is running on port ${configs.APP_PORT}`);

})


// npm run start:dev

