import { useForm } from "react-hook-form";
import RegisterFront from "./RegisterFront";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useState } from "react";
//aqui tendremos toda la logica del registro hacia firebase

const Register = () => {
  //atrapamos los errores de firebase para mostrarlos al usuario
  const [errorMessage, setErrorMessage] = useState("")
  //usaremos el contexto de la aplicacion para traer datos
  const { registerUser } = useContext(UserContext)
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm(); //para atrpara los datos de formulario de forma autocontrolada

  const onSubmit = handleSubmit(async(data) => {
    //vamos a usar la funcion de registro de firebase en la app

    try {
      const userName = getValues("userName");
      const email = getValues("email");
      const password = getValues("password");
      console.log(data);
      console.log(userName);
      await registerUser(email, password)
      reset();
    } catch (error) {
      if(error.code === "auth/email-already-in-use") setErrorMessage("Email already in use")
        if(error.code === "auth/invalid-email") setErrorMessage("Invalid email")
          if(error.code === "auth/missing-email") setErrorMessage("Missing email")
            if(error.code === "auth/missing-password") setErrorMessage("Missing password")
              if(error.code === "auth/too-many-requests") setErrorMessage("Too many requests")
      console.log(error.message);
    }
  });

  return (
    <>
      <RegisterFront onSubmit={onSubmit} register={register} errors={errors} errorMessage={errorMessage} />
    </>
  );
};

export default Register;
