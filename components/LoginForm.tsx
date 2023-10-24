import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  FormControlLabel,
  Checkbox,
  CircularProgress, // Import CircularProgress for the loading spinner
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import router from "next/router";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loginValue === "testuser" && passwordValue === "testpassword123") {
      // Show loading spinner
      setLoading(true);
      setSuccessMessage("");

      setTimeout(() => {
        // Clear spinner and set success message
        setLoading(false);
        setSuccessMessage("Login successful");

        // Delay page navigation for 2 seconds
        setTimeout(() => {
          // Navigate to the table page
          router.push("/table");
        }, 2000);
      }, 2000); // Delay for 2 seconds
    } else {
      // Invalid credentials
      setError("Invalid login or password");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          {loading ? (
            <Box display="flex" justifyContent="center" my={2}>
              <CircularProgress />
            </Box>
          ) : successMessage ? (
            <Typography variant="h6" align="center" color="primary">
              {successMessage}
            </Typography>
          ) : null}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
