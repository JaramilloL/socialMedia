//aqui se renderizaran los componentes de registro, login y navbar para el uaurio, ademas de cuando se autentique se manadara a la pagina de chat 

import { Outlet } from "react-router-dom"

const Index = () => {
  return (
    <div>
        Index
        <Outlet/>
    </div>
  )
}

export default Index