import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"; 
import crypto from "crypto"; 
import User from "@/models/User"; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "POST") {
    return res.status(405).end(); 
  }



  const user = await User.findOne({ email });
  if (!user) {

  const token = crypto.randomBytes(32).toString("hex");


  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASSWORD, 
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
