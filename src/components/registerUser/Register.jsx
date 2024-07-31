import { useForm } from "react-hook-form";
import RegisterFront from "./RegisterFront";
//aqui tendremos toda la logica del registro hacia firebase

const Register = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm(); //para atrpara los datos de formulario de forma autocontrolada

  const onSubmit = handleSubmit((data) => {
    try {
      const userName = getValues("userName");
      const email = getValues("email");
      const password = getValues("password");
      console.log(data);
      console.log(userName, email, password);
      reset();
    } catch (error) {
      console.log(error.message);
    }
  });

  return (
    <>
      <RegisterFront onSubmit={onSubmit} register={register} errors={errors} />
    </>
  );
};

export default Register;
