import { Request, Response } from "express";

import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response){
    try {
        await createUser(req.body)
    } catch (e: any) {
        return res.status(409).send(e.message)
    }
}