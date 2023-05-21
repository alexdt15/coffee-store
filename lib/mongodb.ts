import mongoose from "mongoose";

let cachedDb = null;

// async function connectToDatabase() {
//   if (cachedDb) {
//     return cachedDb;
//   }

//   const client = await MongoClient.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   const db = await client.db();
//   cachedDb = db;
//   return db;
// }

const connectToDatabase = async () => {
  console.log("LLEGUÉ AQUI AL MENOS");
  try {
    mongoose.connect(process.env.MONGODB_URI);

    console.log("Database Connected");
  } catch (err) {
    console.log("ERROR!", err);
    return Promise.reject(err);
  }
};

export default connectToDatabase;
