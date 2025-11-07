import * as yup from "yup";

/* ✅ Validasi Login */
export const VLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email wajib diisi")
    .max(50, "Maksimal 50 karakter"),
  password: yup
    .string()
    .required("Password wajib diisi")
    .min(8, "Password minimal 8 karakter"),
});

/* ✅ Validasi Signup */
export const VSignupSchema = yup.object().shape({
  name: yup.string().required("Nama wajib diisi"),
  email: yup.string().required("Email wajib diisi").email("Email harus valid"),
  password: yup
    .string()
    .required("Password wajib diisi")
    .min(8, "Password minimal 8 karakter"),
  phone: yup.string().required("Nomor telepon wajib diisi"),
  terms: yup
    .boolean()
    .oneOf([true], "Anda harus menyetujui Terms and Privacy Policy"),
  marketing: yup
    .bool()
    .oneOf([true], "Anda harus menyetujui pengiriman marketing"),
});

/* ✅ Validasi Update Admin */
export const VUpdateAdminSchema = yup.object().shape(
  {
    name: yup.string().nullable(),
    email: yup.string().email("Email harus valid").nullable(),
    username: yup.string().required("Username wajib diisi"),
    password: yup.string().when("password", {
      is: (value) => value && value.trim() !== "",
      then: (schema) => schema.min(8, "Password minimal 8 karakter"),
      otherwise: (schema) => schema.optional(),
    }),
  },
  [["password", "password"]]
);
