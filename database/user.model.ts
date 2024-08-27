import { models, model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  role?: string;
  addUser?: boolean;
  editUser?: boolean;
  deleteUser?: boolean;
  viewUser?: boolean;
  joinedAt: Date;
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  addUser: { type: Boolean, default: false },
  editUser: { type: Boolean, default: false },
  deleteUser: { type: Boolean, default: false },
  viewUser: { type: Boolean, default: true },
  joinedAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;
