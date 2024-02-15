const { z } = require("zod");

const signSchema = z.object({
   username: z
   .string({required_error:"Name is required"})
   .trim()
   .min(3, {message:"Name must have minimum 3 characters"})
   .max(255, {message:"Name must not be greater than 255 characters"}),
   email: z
   .string({required_error:"Email is required"})
   .trim()
   .email({ message: "Invalid email address"})
   .min(3, {message:"Name must have minimum 3 characters"})
   .max(255, {message:"Name must not be greater than 255 characters"}),
   phone: z
   .string({required_error:"Phone is required"})
   .trim()
   .min(10, {message:"Phone must have 10 numbers"})
   .max(12, {message:"Phone must must not have more than 10 numbers"}),
   password: z
   .string({required_error:"Password is required"})
   .min(6, {message: "Password must have minimum 6 characters"})
   .max(36, {message: "Password must not have more than 36 characters"})
});

const loginSchema = z.object({
   email: z
   .string({required_error:"Email is required"})
   .trim()
   .email({ message: "Invalid email address"})
   .min(3, {message:"Name must have minimum 3 characters"})
   .max(255, {message:"Name must not be greater than 255 characters"}),
   password: z
   .string({required_error:"Password is required"})
   .min(6, {message: "Password must have minimum 6 characters"})
   .max(36, {message: "Password must not have more than 36 characters"})
});

module.exports = {signSchema, loginSchema};