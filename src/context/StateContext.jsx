//aqui vamos a trabajar con el contexto del usuario rn toda la app
import PropTypes from 'prop-types'
import { UserContext } from './UserContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const StateContext = ({ children }) => {
    //vamos a crear la funcion para registrar usuarios a firebase
    const registerUser =(email, password) => createUserWithEmailAndPassword(auth, email, password)

    //crearemos la funcion para iniciar secion
    const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password)

  return (
    <UserContext.Provider
        value={{
            registerUser,
            signInUser,
        }}
    >
        {children}
    </UserContext.Provider>
  )
}

export default StateContext

StateContext.propTypes = {
    children: PropTypes.any
}