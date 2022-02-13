import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { Button, Stack, Container, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import fireworks from '../assets/fireworks.gif'
import LanguageSwitcher from '../components/LanguageSwitcher';
import currentScoreAtom from '../recoil/atoms/currentScore'
import { useRecoilValue } from 'recoil'

export default function GameWinPage() {
  const { t } = useTranslation('gameOver')
  const score = useRecoilValue(currentScoreAtom)
  const navigate = useNavigate()

  return (
    <Box sx={backgroundStyle}>
      <Container component="main" maxWidth="md" sx={{ mb: 10 }} >
        <Stack spacing={4} sx={{ alignItems: "center" }}>
          <Typography variant="h2" component="h1" color="green" textAlign="center">
            { t('you_won') }
          </Typography>
          <Typography variant="h3" component="h1" color="white" textAlign="center">
            { `${t('your_score')} : ${score}` }
          </Typography>
          <Typography variant="h4" component="h3" color="white" textAlign="center">
            { t('youre_the_most_successful') }
          </Typography>
          <Button variant="contained" size="large" endIcon={<NavigateNextIcon />} onClick={() => navigate('/')}>
            { t('go_to_menu') }
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
  background: `center / cover no-repeat url(${fireworks})`
}