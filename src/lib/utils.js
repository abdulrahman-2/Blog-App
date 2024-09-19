import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDb = async () => {
  if (isConnected) {
    if (process.env.NODE_ENV !== "production") {
      console.log("Already connected to MongoDB");
    }
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO, {
      serverSelectionTimeoutMS: 10000, // 10 seconds timeout for server selection
      socketTimeoutMS: 45000, // 45 seconds timeout for operations
      maxPoolSize: 10, // Optional: Max 10 concurrent connections
    });

    isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("MongoDB connection failed");
  }
};
