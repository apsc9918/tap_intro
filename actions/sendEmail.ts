"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend("re_GL9SahVK_PTrP3F3bRatu5zUVF13pU2w6");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const senderName = senderEmail?.toString().split('@')[0] || 'Contact Form';
    
    data = await resend.emails.send({
      from: `${senderName} via Contact Form <onboarding@resend.dev>`,  // Shows sender's name but uses verified email
      to: "akshaypratapsingh12345@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,  // Allows you to reply directly to sender
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
