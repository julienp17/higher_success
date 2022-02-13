import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { Button, Stack, Container, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import crying_man from '../assets/crying_man.gif'
import LanguageSwitcher from '../components/LanguageSwitcher';
import currentScoreAtom from '../recoil/atoms/currentScore'
import { useRecoilValue } from 'recoil'

export default function GameOverPage() {
  const { t } = useTranslation('gameOver')
  const score = useRecoilValue(currentScoreAtom)
  const navigate = useNavigate()

  const tryAgain = () => {

    navigate('/most-success')
  }

  return (
    <Box sx={backgroundStyle}>
      <Container component="main" maxWidth="md" sx={{ mb: 10 }} >
        <Stack spacing={4} sx={{ alignItems: "center" }}>
          <Typography variant="h2" component="h1" color="red" textAlign="center">
            { t('you_lost') }
          </Typography>
          <Typography variant="h3" component="h1" color="white" textAlign="center">
            { `${t('your_score')} : ${score}` }
          </Typography>
          <Typography variant="h4" component="h3" color="white" textAlign="center">
            { '"' + t('success_quote') + '"' }
          </Typography>
          <Typography variant="h5" component="h4" color="white">
            — Winston S. Churchill
          </Typography>
          <Button variant="contained" size="large" endIcon={<NavigateNextIcon />} onClick={() => navigate('/')}>
            { t('go_to_menu') }
          </Button>
          <Button variant="contained" size="large" endIcon={<NavigateNextIcon />} onClick={tryAgain}>
            { t('try_again')}
          </Button>
        </Stack>
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
  background: `center / cover no-repeat url(${crying_man})`
}