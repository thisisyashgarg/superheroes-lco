import mongoose from "mongoose";

const connection: { isConnected: number } = {
  isConnected: 0,
};

async function dbConnect() {
  console.log("dbConnect");
  if (connection.isConnected) return;
  const db = await mongoose.connect(`${process.env.MONGODB_URI}`, {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
  });
  connection.isConnected = db.connections[0].readyState;
  console.log("connection.isConnected", connection.isConnected);
}

export default dbConnect;
