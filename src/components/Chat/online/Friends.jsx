//en este como=ponente vamos a listar a los uaurios en linea

import {
  Avatar,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const Friends = () => {
    const { onLine, user } = useContext(UserContext)

  return (
    <>
      {onLine ? (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageListItem>
                  <img
                    src={user.photoURL ? user.photoURL : <ImageIcon />}
                    loading="lazy"
                  />
                </ImageListItem>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={onLine ? "OnLine" : "OffLine"}
              secondary={user & user.displayName || user.email}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      ) : (
        ""
      )}
    </>
  );
};

export default Friends;
