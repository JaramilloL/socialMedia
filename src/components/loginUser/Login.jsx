//aqui pondremos la logica de la captura de datos

import { useForm } from "react-hook-form";
import LoginFront from "./LoginFront";

const Login = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm(); //para atrpara los datos de formulario de forma autocontrolada

  const onSubmit = handleSubmit((data) => {
    try {
      const email = getValues("email");
      const password = getValues("password");
      console.log(data);
      console.log(email, password);
      reset();
    } catch (error) {
      console.log(error.message);
    }
  });
  //le pasamos las funciones de formular al componente
  return (
  <>
    <LoginFront register={register} errors={errors} onSubmit={onSubmit} />
  </>
  );
};

export default Login;
