import mongoose from "mongoose";

// this is used to check if db is connected
const connection: { isConnected: number } = {
  isConnected: 0,
};

// connects to db and updates connection.isConnected value
async function dbConnect() {
  console.log("dbConnect");
  if (connection.isConnected) return;
  const db = await mongoose.connect(`${process.env.MONGODB_URI}`, {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
  });
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
