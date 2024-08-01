//aqui pondremos la logica de la captura de datos

import { useForm } from "react-hook-form";
import LoginFront from "./LoginFront";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //creamos un estado para almacenar los errores
  const [errorMessage, setErrorMessage] = useState("");
  //traemos el contexto
  const { signInUser, sigInWithGoogle, resetPassword } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm(); //para atrpara los datos de formulario de forma autocontrolada

  const onSubmit = handleSubmit(async (data) => {
    //usaremos el inicio de secion con el contexto de la app

    try {
      const email = getValues("email");
      const password = getValues("password");
      console.log(data);
      console.log(email, password);
      await signInUser(email, password);
      reset();
      navigate("/chat");
    } catch (error) {
      if (error.code === "auth/invalid-credential")
        setErrorMessage(
          "User is did not make created or password is incorrect"
        );
      console.log(error.message);
    }
  });

  //creamos una funcion para el inicio de secion mediante google y el contexto
  const sigInGoogle =async()=>{
    try {
      await sigInWithGoogle();
      navigate('/chat')
    } catch (error) {
      console.log(error.message);
    }
  }
  //reset delpassword
  const resetPasswordUser =async()=>{
    try {
      const email = getValues('email');
      await resetPassword(email)
    } catch (error) {
      if(error.code === "auth/missing-email") setErrorMessage('Agree email')
      console.log(error.message);
    }
  }
  //le pasamos las funciones de formular al componente
  return (
    <>
      <LoginFront
        register={register}
        errors={errors}
        onSubmit={onSubmit}
        errorMessage={errorMessage}
        sigInGoogle={sigInGoogle}
        resetPasswordUser={resetPasswordUser}
      />
    </>
  );
};

export default Login;
