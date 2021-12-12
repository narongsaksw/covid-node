import mongoose from 'mongoose'

export interface UserDocument extends mongoose.Document {
    gender: string;
    age: number;
    occupation: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
},{
    timestamps: true
})

const UserModel = mongoose.model<UserDocument>("User", userSchema)

export default UserModel