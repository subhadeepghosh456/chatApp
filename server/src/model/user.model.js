import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    password: { type: String, required: true },
    avatarUrl: { type: String },
    
},{timestamps: true })

export default mongoose.model('User', userSchema)