import mongoose from 'mongoose'
export interface UserDocument extends mongoose.Document {
    citizenId: string;
    gender: string;
    age: number;
    occupation: string;
    from: string;
    to: string;
    locationType: string;
    locationName: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema({
    citizenId: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    timelines: {
        type: [{ 
            from: { 
                type: String,
                required: true
            },
            to: { 
                type: String,
                required: true,
            },
            locationType: { 
                type: String,
                required: true,
            },
            locationName: { 
                type: String,
                required: true,
            },
        }],
        required: true,
        default: []
    }
},{
    timestamps: true
})

const UserModel = mongoose.model<UserDocument>("User", userSchema)

export default UserModel