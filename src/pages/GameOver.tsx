import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Stack, Container, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import crying_man from '../assets/crying_man.gif'

export default function GameOverPage() {
  const navigate = useNavigate()

  return (
    <Box sx={backgroundStyle}>
      <Container component="main" sx={{ mb: 10 }} >
        <Stack spacing={4} sx={{ alignItems: "center" }}>
          <Typography variant="h1" component="h1" color="red" textAlign="center">
            You lost!
          </Typography>
          <Typography variant="h3" component="h3" color="white" textAlign="center">
            "Success is not final, failure is not fatal. It is the courage to continue that counts."
          </Typography>
          <Typography variant="h4" component="h4" color="white">
            — Winston S. Churchill
          </Typography>
          <Button variant="contained" size="large" endIcon={<NavigateNextIcon />} onClick={() => navigate('/')}>
            Go to menu
          </Button>
          <Button variant="contained" size="large" endIcon={<NavigateNextIcon />} onClick={() => navigate('/most-success')}>
            Try again
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

const backgroundStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  background: `center / cover no-repeat url(${crying_man})`
}
