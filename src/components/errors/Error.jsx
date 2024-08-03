//aqui atraparemos los errores de la navegacion de las paginas y la carga de la navegacion

import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  return (
    <div>{error.message}</div>
  )
}

export default Error