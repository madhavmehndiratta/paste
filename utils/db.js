import mongoose from "mongoose";

let isConnected = false;

export const connect = async () => {
  if (!isConnected) {
    await mongoose.connect("mongodb://mongo:27017/paste", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  }
};
