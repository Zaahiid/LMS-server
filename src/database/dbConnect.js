import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully 😎");
  } catch (err) {
    console.log("Error while connecting to database", err);
  }
};

export default dbConnect;
