//aqui vamos a plasmar la logica de los mensajes y la conexion a la base de datos de firebase
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { UserContext } from "../../context/UserContext";
import ChatFront from "./ChatFront";
const Chat = () => {
  //traemos el usuario del contexto de la app
  const { user } = useContext(UserContext);
  
  //creamos un estado para almacenar el mensaje escrito
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  //creamos una funcion para el envio del mensaje a la base de datos de firebase
  const shareMessages = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "socialMedia"), {
        message,
        user: user.email,
        createdAt: new Date(), // Añadimos la fecha de creación para ordenar mensajes
      });
      setMessage("");
      
    } catch (error) {
      console.log(error.message);
    }
  };

  const readMessages = () => {
    const q = query(collection(db, "socialMedia"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //agregamos los mensajes al estado de mesnajes
      setMessages(newMessages);
    });
    //limpiamos la funcion
    return unsubscribe;
  };
  //vamos a usar useeffect para imprimir los datso en pantalla
  useEffect(() => {     
    const unsubscribe = readMessages();
    // Limpiar el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  return (
    <>
      <ChatFront
        shareMessages={shareMessages}
        message={message}
        setMessage={setMessage}
        messages={messages}
      />
    </>
  );
};

export default Chat;
