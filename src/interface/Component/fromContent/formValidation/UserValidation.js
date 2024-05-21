import * as Yup from "yup";

export const UserValidation = Yup.object({
  name: Yup.string().min(3).max(30).required("Enter Your Name"),
  description: Yup.string().min(10).max(30).required("Enter Image Bio"),
  file: Yup.mixed().required("File is required Upload Image"),
});
