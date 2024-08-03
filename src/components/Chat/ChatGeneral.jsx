import { Box, Typography } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Navigate } from "react-router-dom"
import Chat from "./Chat"

const ChatGeneral = () => {
    const { user, loading } = useContext(UserContext)

    if(loading) return <Typography variant="h4">Loading...</Typography>
    if (!user) return <Navigate to='/'/>

  return (
    <Box>
        <Box>
            <Chat/>
        </Box>
    </Box>
  )
}

export default ChatGeneral