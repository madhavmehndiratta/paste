import mongoose from "mongoose";

let isConnected = false;

export const connect = async () => {
  if (!isConnected) {
    await mongoose.connect("mongodb://localhost/paste", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  }
};
