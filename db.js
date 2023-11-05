import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("correctly connected to mongodb.");
  } catch (error) {
    throw new Error("Connection failed - error : " + error);
  }
};

export default connect;
