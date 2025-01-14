import { MongoClient } from "mongodb";

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://rzshen0417:HiLVT3Y0FCVRI9Ye@cluster0.qedb3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientPromise = new MongoClient(uri, {});

export default clientPromise;
