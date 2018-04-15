import {Document, Schema} from "mongoose";

export const mongoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export interface IUser extends Document {
  _id: String,
  name: String,
  password: String
}
