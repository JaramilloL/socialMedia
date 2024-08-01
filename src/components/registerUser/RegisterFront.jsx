import { Box, Button, TextField, Typography } from "@mui/material"
import PropTypes from 'prop-types'

const RegisterFront = ({ onSubmit, register, errors }) => {
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
          id="userName"
          label="userName"
          autoComplete="off"
          variant="standard"
          type="text"
          sx={{ mb: 2 }}
          fullWidth
          margin="normal"
          {...register("userName", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        <Typography variant="body2" color="primary">
          {errors?.userName?.message}
        </Typography>

        <TextField
          id="email"
          label="email"
          autoComplete="off"
          variant="standard"
          type="email"
          sx={{ mb: 2 }}
          fullWidth
          margin="normal"
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
              width: "10%",
              display: "flex",
              justifyContent: "center",
              m: "0 auto",
            }}
            type="submit"
          >
            Submite
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default RegisterFront

RegisterFront.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object
}