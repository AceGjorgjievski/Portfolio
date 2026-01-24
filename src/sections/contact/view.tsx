"use client";

import { useResponsive } from "@/hooks/use-response";
import { post } from "@/services/api";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ContactView() {
  const isSmUp = useResponsive("up", "sm");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("final: ", formData);
    const res = await post("contact", formData);
    console.log("res: ", res);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log("change: ", formData);
  };

  return (
    <>
      <Container
        sx={{
          marginTop: "70px",
        }}
      >
        {
          <>
            <Container>
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
                <Typography
                  variant="h6"
                  sx={{ color: "cyan", marginBottom: 2 }}
                >
                  Let&apos;s work together
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
                  <TextField
                    name="name"
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    value={formData.name}
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
                    name="subject"
                    label="Your Subject"
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={formData.subject}
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
                    name="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={3}
                    fullWidth
                    value={formData.message}
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
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "cyan",
                    }}
                    disabled={
                      !formData.name ||
                      !formData.email ||
                      !formData.subject ||
                      !formData.message
                    }
                  >
                    <Typography
                      sx={{
                        color:
                          !formData.name ||
                          !formData.email ||
                          !formData.subject ||
                          !formData.message
                            ? "white"
                            : "black",
                      }}
                    >
                      Send Message
                    </Typography>
                  </Button>
                </Box>
              </Paper>
            </Container>
          </>
        }
      </Container>
    </>
  );
}
