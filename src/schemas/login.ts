import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
  password: yup
    .string()
    .min(5, "Mínimo de 5 caracteres!")
    .required("Campo obrigatório!"),
});
