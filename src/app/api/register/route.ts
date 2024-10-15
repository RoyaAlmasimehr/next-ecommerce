import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/mongodb"; // مسیر را مطابق با ساختار پروژه خود تنظیم کنید
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();
    const { db } = await connectToDatabase();

    // بررسی وجود کاربر
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // رمز عبور هش شده
    const hashedPassword = await bcrypt.hash(password, 10);

    // ذخیره کاربر جدید
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };

    await db.collection("users").insertOne(newUser);

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.error();
  }
}
