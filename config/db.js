
import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });

    console.log(`Connected To MongoDB Database ${conn.connection.host}`.bgMagenta.white);

    // Reconnect on disconnection
    mongoose.connection.on('disconnected', () => {
      console.log('Disconnected from the database. Reconnecting...');
      connectToDatabase();
    });
  } catch (error) {
    console.error(`Error in MongoDB Connection: ${error.message}`.bgRed.white);
  }
};

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Reconnected to the database');
  } catch (error) {
    console.error(`Error reconnecting to the database: ${error.message}`.bgRed.white);
  }
};

export default connectDB;
