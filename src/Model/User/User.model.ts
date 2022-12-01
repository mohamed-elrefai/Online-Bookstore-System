import { Schema, model, Document } from "mongoose";
import { toJSON } from "../../@Types/toJson/User.tojson";
import UserIntrfaces from "../../InterFace/User";

const AdderssSchema = new Schema({
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
})

const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    address:AdderssSchema,
    phoneNumber:{
        type: String,
        required: true,
    },
    currentAmount:{
        type: Number,
        default: 0,
    },
    avatarUrl: {
        type: String,
        default: 'https://firebasestorage.googleapis.com/v0/b/animeview-60d78.appspot.com/o/user.jpeg?alt=media&token=2b11e16f-41a6-435d-afdc-f7f68615d2f7',
    },
    token:{
        type: String
    },
},{
    timestamps: true
});

UserSchema.methods.toJSON = toJSON

const UserModel = model<UserIntrfaces & Document>('User', UserSchema)

export default UserModel;