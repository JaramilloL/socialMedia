//aqui pondremos la logica de la captura de datos

import { useForm } from "react-hook-form";
import LoginFront from "./LoginFront";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //traemos el contexto
  const { signInUser } = useContext(UserContext)
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm(); //para atrpara los datos de formulario de forma autocontrolada

  const onSubmit = handleSubmit(async(data) => {
    //usaremos el inicio de secion con el contexto de la app
    
    try {
      const email = getValues("email");
      const password = getValues("password");
      console.log(data);
      console.log(email, password);
      await signInUser(email, password)
      navigate('/chat')
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
