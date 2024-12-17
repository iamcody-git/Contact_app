import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONN_STRING);
    console.log(
      "Connected to database:",
      conn.connection.host,
      conn.connection.name
    );
  } catch (err) {
    console.log("Error: Could not connect.", err);
  }
};

export default connectDb;
