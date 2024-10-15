import { MongoClient } from "mongodb";


const uri = "mongodb://localhost:27017";


const client = new MongoClient(uri);


export async function connectToDatabase() {
  try {
    await client.connect();
    const db = client.db("kouchinni"); 
    return { db, client };
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}
