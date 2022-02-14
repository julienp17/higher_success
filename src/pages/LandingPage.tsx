import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Stack, Container, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import home_background from '../assets/HomeBackground.gif'
import logo from '../assets/HomeLogo.png'
import LanguageSwitcher from '../components/LanguageSwitcher';
import ChooseCategoriesDialog from '../components/ChooseCategories';
import compareCategories from '../data/index'
import { useTranslation } from 'react-i18next';


export default function LandingPage() {
  const { t } = useTranslation('landingPage')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const onClose = () => setOpen(false)

  return (
    <Box sx={backgroundStyle}>
      <Container component="main" maxWidth="md" sx={{ mb: 10 }} >
        <Stack spacing={4} sx={{ alignItems: "center" }}>
          <img src={logo} alt="Most successfull logo" style={{ width: 770, height: 300 }}/>
          <Typography variant="h5" component="h2" gutterBottom color="white"  textAlign="center">
            { t('caption') }
          </Typography>
          <Button variant="contained" size="large" endIcon={<NavigateNextIcon />} onClick={() => navigate('most-success')}>
            { t('start_playing') }
          </Button>
          <Button variant="contained" size="large"  onClick={() => setOpen(true)}>
            { t('choose_categories') }
          </Button>
        </Stack>
        <ChooseCategoriesDialog
          open={open}
          onClose={onClose}
        />
      </Container>
      <LanguageSwitcher />
    </Box>
  );
}

const backgroundStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  background: `center / cover no-repeat url(${home_background})`
}
