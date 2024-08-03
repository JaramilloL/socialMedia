//navbar para la navegacion de paginas

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import NavList from "./NavList";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  //traeremos el contexto del user para modificar el contenido del navbar
  const { user, logOutUser } = useContext(UserContext);
  //manejo del estodo de clic para el navigation
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", sm: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SocialMedia
          </Typography>
          {user ? (
            <Button color="inherit" onClick={logOutUser}>
              LogOut
            </Button>
          ) : (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button color="inherit">
                <NavLink
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Login
                </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink
                  to="/register"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Register
                </NavLink>
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <NavList onClick={() => setOpen(false)} />
      </Drawer>
    </Box>
  );
};

export default Navbar;
