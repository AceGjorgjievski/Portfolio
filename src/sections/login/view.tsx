"use client";

import { useAuthContext } from "@/auth/hooks";
import { useRouter } from "@/routes/hooks";
import { paths } from "@/routes/paths";
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function LoginView() {
  const { login } = useAuthContext();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(formData.email, formData.password);
      router.push(paths.home());
    } catch (err) {
      setError(`Login error: ${err}`);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError("");
  };

  const renderFields = (
    <>
      <TextField
        name="email"
        label="Your Email"
        type="email"
        variant="outlined"
        fullWidth
        value={formData.email}
        onChange={handleChange}
        inputProps={{ style: { color: "cyan" } }}
        sx={{
          marginBottom: 2,
          backgroundColor: "#1c1c22",
          borderRadius: 1,
          "& .MuiInputLabel-root": { color: "cyan" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "cyan" },
            "&:hover fieldset": { borderColor: "cyan" },
            "&.Mui-focused fieldset": { borderColor: "cyan" },
          },
        }}
        InputLabelProps={{
          style: { color: "cyan" },
        }}
      />
      <TextField
        name="password"
        label="Your Password"
        type="password"
        variant="outlined"
        fullWidth
        value={formData.password}
        onChange={handleChange}
        inputProps={{ style: { color: "cyan" } }}
        sx={{
          marginBottom: 2,
          backgroundColor: "#1c1c22",
          borderRadius: 1,
          "& .MuiInputLabel-root": { color: "cyan" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "cyan" },
            "&:hover fieldset": { borderColor: "cyan" },
            "&.Mui-focused fieldset": { borderColor: "cyan" },
          },
        }}
        InputLabelProps={{
          style: { color: "cyan" },
        }}
      />
    </>
  );

  const renderLoginButton = (
    <>
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "cyan",
        }}
        disabled={!formData.email || !formData.password}
      >
        <Typography
          sx={{
            color: !formData.email || !formData.password ? "white" : "black",
          }}
        >
          Log in
        </Typography>
      </Button>
      {error && (
        <Typography
          color="error"
          variant="body2"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {error}
        </Typography>
      )}
      <Typography
        sx={{
          fontSize: "4px",
          mt: 3,
        }}
      >
        pazi shto pishes, kamera to snima :)
      </Typography>
    </>
  );

  return (
    <Container
      sx={{
        marginTop: "70px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          width: "100%",
          height: "100%",
          backgroundColor: "#25252e",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ color: "cyan", marginBottom: 2 }}>
          Hah, u found sth, nice :D
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "75%",
          }}
          onSubmit={handleSubmit}
        >
          {renderFields}
          {renderLoginButton}
        </Box>
      </Paper>
    </Container>
  );
}
