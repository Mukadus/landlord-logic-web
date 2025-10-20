import { emailRegex } from "@/resources/utils/regex";
import * as Yup from "yup";

export const ContactFormSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .test(
      "no-special-chars",
      "Email contains invalid characters",
      (value) => !value || emailRegex.test(value)
    ),
  message: Yup.string().required("Message is required"),
});