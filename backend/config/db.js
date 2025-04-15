import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose
      .connect('mongodb+srv://chamith:17521912Cc@cluster0.c3wos3x.mongodb.net/dine-now')
      .then(() => console.log("DB Connected"))
      .catch((err) => console.error("DB Connection Error:", err));
}
  
export default connectDB;