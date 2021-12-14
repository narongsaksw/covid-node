import { Request, Response } from "express";

import { CreateUserInput } from "../schema/user.schema";
import { createUser, findUserById, addTimelineUser, getAllUsers } from "../service/user.service";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response){
    try {
        const user = await findUserById(req.body.citizenId)
        
        const hasUserAlready = user !== null
        if(hasUserAlready){
            await addTimelineUser(req.body)
        }else {
            await createUser(req.body)
        }
        return res.status(200).send({ message:'successfully.', user: req.body })
    } catch (e: any) {
        return res.status(409).send(e.message)
    }
}

export async function getAllUsersHandler(req: Request, res: Response) {
    try {
        const users = await getAllUsers()
        return res.status(200).send(users)
    } catch (e: any) {
        return res.status(404).send(e.message)
    }
}