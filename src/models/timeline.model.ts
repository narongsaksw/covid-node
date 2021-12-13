import mongoose from 'mongoose'
import { UserDocument } from './user.model'

export interface TimelineDocument extends mongoose.Document {
    user: UserDocument["_id"];
    from: Date;
    to: String;
    detail: String;
    locationType: String;
    locationName: String;
}

const timelineSchema = new mongoose.Schema({
    timelineId: {
        type: String,
        required: true,
        unique: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    from: {type: Date, required: true},
    to: {type: String, required: true},
    locationType: {type: String, required: true},
    locationName: {type: String, required: true},
},{
    timestamps: true
})

const TimelineModel = mongoose.model<TimelineDocument>("Timeline", timelineSchema)

export default TimelineModel