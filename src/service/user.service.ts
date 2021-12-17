import { DocumentDefinition, Types } from 'mongoose'

import UserModel, { UserDocument } from '../models/user.model';

export async function createUser(user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>) {
    try {
        const { from, to , detail, locationType, locationName } = user
        await UserModel.create({ ...user, timelines: [{ from, to, detail, locationType, locationName }] })
    } catch (e: any) {
        throw new Error(e)
    }
}
export async function findUserById(citizenId: string) {
    try {
        const user = await UserModel.findOne({ citizenId })
        return user
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function addTimelineUser(values: any) {
    const { citizenId, from, to, detail, locationType, locationName } = values
    try {
        await UserModel.updateOne(
            { citizenId }, 
            { 
                $push: { 
                    timelines: {
                        $each: [{ from, to, detail, locationType, locationName }]
                    }
                } 
            }
        )
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function getAllUsers() {
    const users = await UserModel.find({})
    return users
}

export async function deleteTimeline(citizenId: string, timelineId: string) {
    try {
        await UserModel.updateOne({ citizenId }, {
            $pull: {
                timelines: { _id: new Types.ObjectId(timelineId) }
            }
        })
    } catch (e: any) {
        throw new Error(e)
    }
}