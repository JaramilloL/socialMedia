import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { NavLink } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PropTypes from 'prop-types'
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const NavList = ({ onClick }) => {
  //creamos el contexto para cambiar la informacion del navlist
  const { user, logOutUser } = useContext(UserContext)
  return (
    <Box sx={{ width: 250 }} onClick={onClick}>
      <List>
        <Box component={"div"} sx={{ display: { xs: "block", sm: "none" } }}>
          <ListItem disablePadding sx={{ display: "block" }}>
          {
            user ? (
              <ListItemButton>
                <ListItemIcon onClick={logOutUser}>

                  <ListItemText>LogOut</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ):(
              <>
                <ListItemButton>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <NavLink to="/" style={{ textDecoration: 'none', color: '#111' }}><ListItemText primary="Login" /></NavLink>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <HowToRegIcon />
              </ListItemIcon>
              <NavLink to="/register" style={{ textDecoration: 'none', color: '#111' }}><ListItemText primary="Register" /></NavLink>
            </ListItemButton>
              </>
            )
          }
            
          </ListItem>
        </Box>
      </List>
    </Box>
  )
}

export default NavList

NavList.propTypes = {
    onClick: PropTypes.func
}