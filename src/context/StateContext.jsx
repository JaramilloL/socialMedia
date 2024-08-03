//aqui vamos a trabajar con el contexto del usuario rn toda la app
import PropTypes from 'prop-types'
import { UserContext } from './UserContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { useEffect, useState } from 'react'

const StateContext = ({ children }) => {
    //creamos un estado para almacenar el usuario para
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    //vamos a crear la funcion para registrar usuarios a firebase
    const registerUser =(email, password) => createUserWithEmailAndPassword(auth, email, password)

    //crearemos la funcion para iniciar secion
    const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password)

    //creamos  una funcion para cerrar ;la secion del usuario
    const logOutUser = ()=> signOut(auth)

    //vamos a implementar el inicio de secion medinate google
    const sigInWithGoogle =()=>{ 
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    };

    //creamos una funcion para cambiar el password de cada cuenta
    const resetPassword = (email)=> sendPasswordResetEmail(auth, email)

    //mediante el useeffect vamos a capturar los datos del usuario siempre y cuando este autenticado y mantener la secion abierta
    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        })

        return ()=> unsuscribe()
    },[])

  return (
    <UserContext.Provider
        value={{
            registerUser,
            signInUser,
            logOutUser,
            user,
            loading,
            sigInWithGoogle,
            resetPassword,
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