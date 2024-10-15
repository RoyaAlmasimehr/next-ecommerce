import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"; // برای ارسال ایمیل
import crypto from "crypto"; // برای تولید توکن امن
import User from "@/models/User"; // ایمپورت مدل User

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // بررسی نوع متد درخواست
  if (req.method !== "POST") {
    return res.status(405).end(); // فقط روش POST را قبول می‌کنیم
  }

  const { email } = req.body; // دریافت ایمیل از درخواست

  // جستجوی کاربر بر اساس ایمیل
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found." }); // اگر کاربر وجود نداشته باشد
  }

  // تولید توکن تصادفی برای بازیابی رمز عبور
  const token = crypto.randomBytes(32).toString("hex");

  // اینجا باید توکن را در دیتابیس ذخیره کنید (به همراه زمان انقضا)

  // ارسال ایمیل بازنشانی
  const transporter = nodemailer.createTransport({
    service: "gmail", // یا سرویس ایمیل دیگری
    auth: {
      user: process.env.EMAIL_USER, // ایمیل ارسال‌کننده
      pass: process.env.EMAIL_PASSWORD, // رمز عبور
    },
  });

  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}&email=${email}`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: `You requested a password reset. Click the following link to reset your password: ${resetUrl}`,
    });

    res.status(200).json({ message: "Reset link sent to your email." });
  } catch (error) {
    res.status(500).json({ message: "Error sending email." });
  }
}
