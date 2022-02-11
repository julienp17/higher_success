import * as React from 'react';
import { Button, Stack, Container, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import raining_money from '../assets/raining_money.gif'
import logo from '../assets/logo.png'

export default function LandingPage() {
  return (
    <Box sx={backgroundStyle}>
      <Container component="main" maxWidth="md" sx={{ mb: 10 }} >
        <Stack spacing={4} sx={{ alignItems: "center" }}>
          <img src={logo} alt="Higher success logo" style={{ width: 250, height: 250 }}/>
          <Typography variant="h2" component="h1" color="white">
            Highest success
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="white" maxWidth="sm" textAlign="center">
            Can you guess who has the most success ?
          </Typography>
          <Button variant="contained" size="large" endIcon={<NavigateNextIcon />}>
            Start playing
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
  background: `center / cover no-repeat url(${raining_money})`
}
