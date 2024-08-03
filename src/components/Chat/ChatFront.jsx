//aqui solo se implementara la parte vizual del componente del
import { Box, Button, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Friends from "./online/Friends";

const ChatFront = ({ shareMessages, message, setMessage, messages }) => {
  return (
    <Box component={"form"} onSubmit={shareMessages}>
      <TextField
        id="message"
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        variant="filled"
        autoComplete="off"
      />
      <Button variant="text" color="primary" type="submit">
        Submit
      </Button>
      <Box>
      <Friends/>
        {messages &&
          messages.map((mess) => (
            <Box key={mess.id} display='flex' justifyContent='end'>
              <Typography variant="body2" border={2} borderColor='black' borderRadius='50px' p={1} bgcolor='primary'>
                {mess.user}: {mess.message}
              </Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ChatFront;

ChatFront.propTypes = {
  shareMessages: PropTypes.func.isRequired,
  message: PropTypes.string,
  setMessage: PropTypes.func,
  messages: PropTypes.any,
};
