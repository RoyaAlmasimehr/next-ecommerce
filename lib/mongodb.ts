import { MongoClient } from "mongodb";

// آدرس اتصال به MongoDB محلی
const uri = "mongodb://localhost:27017";

// ایجاد یک نمونه MongoClient
const client = new MongoClient(uri);

// تابعی برای اتصال به MongoDB
export async function connectToDatabase() {
  try {
    await client.connect();
    const db = client.db("kouchinni"); // نام دیتابیسی که ایجاد کرده‌اید
    return { db, client };
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}
