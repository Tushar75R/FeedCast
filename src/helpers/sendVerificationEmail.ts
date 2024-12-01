import { ApiResponse } from "@/types/ApiResponse";
import nodemailer from "nodemailer";

export async function sendVerificationEmaiil(
  username: string,
  email: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const auth = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: "mylmye07@gmail.com",
        pass: process.env.NODEMAILER_PASS,
      },
    });
    await auth.sendMail({
      from: "mylmye07@gmail.com",
      to: email,
      subject: "FEEDBACK MANAGER :  Verification mail",
      text: `
      Hello ${username},
      Thank you for registering. Please use the following verification
      code to complete your registration:
      --> ${verifyCode} <--`,
    });

    return { success: true, message: "varification code send successfully" };
  } catch (error) {
    console.log("email component has error", error);
    return { success: false, message: "Failed to send email" };
  }
}
