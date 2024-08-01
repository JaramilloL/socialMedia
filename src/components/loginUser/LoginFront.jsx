import { Box, Button, Link, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";

const LoginFront = ({
  onSubmit,
  register,
  errors,
  errorMessage,
  sigInGoogle,
  resetPasswordUser,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Box
        component={"form"}
        onSubmit={onSubmit}
        bgcolor={"primary"}
        width={"100%"}
        mb={2}
        maxWidth="400px"
        p={2}
      >
        <TextField
          id="email"
          label="email"
          autoComplete="off"
          variant="standard"
          type="email"
          fullWidth
          margin="normal"
          sx={{ mb: 2 }}
          {...register("email", {
            required: {
              value: true,
              message: "email is required",
            },
          })}
        />
        <Typography variant="body2" color="primary">
          {errors?.email?.message}
        </Typography>

        <TextField
          id="password"
          label="password"
          autoComplete="off"
          variant="standard"
          type="password"
          fullWidth
          margin="normal"
          sx={{ mb: 2 }}
          {...register("password", {
            required: {
              value: true,
              message: "password is required",
            },
          })}
        />
        <Typography variant="body2" color="primary">
          {errors?.password?.message}
        </Typography>

        <Box>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              m: "0 auto",
              mb: 2,
            }}
            type="submit"
          >
            Submite
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              m: "0 auto",
              //   bgcolor: "#712"
            }}
            onClick={sigInGoogle}
          >
            GOOGLE
          </Button>
          <Link
            mt={2}
            variant="body2"
            display="flex"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
          >
            <Button onClick={resetPasswordUser}>Forgot password</Button>
          </Link>
          <Typography variant="body2">
            {errorMessage && errorMessage}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginFront;

LoginFront.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  errorMessage: PropTypes.string,
  sigInGoogle: PropTypes.func,
  resetPasswordUser: PropTypes.func,
};
