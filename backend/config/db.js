import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mdraushanji:62807795@cluster0.cg4o9.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
