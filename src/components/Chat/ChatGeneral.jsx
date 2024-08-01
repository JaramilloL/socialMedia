import { Box, Button, Typography } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Navigate, useNavigate } from "react-router-dom"

const ChatGeneral = () => {
    const { logOutUser, user, loading } = useContext(UserContext)
    const navigate =  useNavigate()

    const logOut =async () => {
        try {
            await logOutUser();
            navigate('/')
        } catch (error) {
            
            console.log(error.message)
        }
    }
    if(loading) return <Typography variant="h4">Loading...</Typography>
    if (!user) return <Navigate to='/'/>

  return (
    <Box>
        <Button variant="outlined" color="secondary" sx={{mt: 2}} onClick={logOut}>
          LogOut
        </Button>
    </Box>
  )
}

export default ChatGeneral