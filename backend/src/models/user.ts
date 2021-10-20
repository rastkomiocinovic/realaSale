import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema(
    {
        name: {
            type: String
        },
        lastname: {
            type: String
        },
        username: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        picture: {
            type: Buffer
        },
        email: {
            type: String,
            unique: true
        },
        city: {
            type: String
        },
        country: {
            type: String
        },
        type: {
            type: Number
        },
        avatar: {
            type: String
        }
    }
);

export default mongoose.model('User', User, 'users');