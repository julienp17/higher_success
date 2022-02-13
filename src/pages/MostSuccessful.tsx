import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Box, Avatar, Typography, Button, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Contender } from '../data/types';
import { Link, useNavigate } from 'react-router-dom';
import { generateQuiz } from '../utils'
import LanguageSwitcher from '../components/LanguageSwitcher';

type SideContenderProps = {
  contender: Contender,
  guessMostSuccessfull: (contender: Contender) => void,
  guessedRight: boolean | undefined,
  formatValue: string | ((value: number) => string),
  generateNewQuiz: (() => void)
}

function SideContender({ contender, guessMostSuccessfull, guessedRight, formatValue, generateNewQuiz } : SideContenderProps) {
  const { t, i18n } = useTranslation(['mostSuccessful', 'common'])

  return (
    <Box sx={styles.side} >
      <img width="100%" height="100%" style={styles.bgImg} src={contender.imageUri} />
      <Stack spacing={2} alignItems="center" maxWidth="md" >
        <Typography variant="h3" component="h1" color="white" textAlign="center">
          { `"${contender.name}"` }
        </Typography>
        <Typography variant="subtitle1" component="p" color="white" textAlign="center">
          { i18n.languages[0] === "en" ? t("is", { ns: "common" }) : t('has', { ns: "common" }) }
        </Typography>
        {
          guessedRight === undefined ?
          <Button variant="contained" size="large" startIcon={<ArrowUpwardIcon />} onClick={() => guessMostSuccessfull(contender)}>
            { t('more_successful') }
          </Button>
          :
          <Typography variant="h3" component="p" color="white" textAlign="center">
            most successfull with {
              (typeof formatValue === 'string')
              ? `${contender.value} ${formatValue}`
              : `${formatValue(contender.value)}`
            }
          </Typography>
        }
        {
          guessedRight === true &&
          <Button variant="contained" size="large" endIcon={<NavigateNextIcon />} onClick={generateNewQuiz}>
            Next
          </Button>
        }
      </Stack>
    </Box>
  )
}

function HomePanel({ categoryTitle } : { categoryTitle : string }) {
  const { t } = useTranslation('mostSuccessful')

  return (
    <Stack sx={styles.homePanel} direction="row" spacing={2} alignItems="center">
      <Link to='/'>
        <Button variant="contained" size="large">
          <HomeIcon />
        </Button>
      </Link>
      <Typography variant="subtitle1" component="h1" color="white" textAlign="center">
        { t('category') + ':' } { categoryTitle }
      </Typography>
    </Stack>
  )
}

function MiddleCaption({ caption, guessedRight } : { caption: string, guessedRight: boolean | undefined }) {
  const { t } = useTranslation('mostSuccessful')

  return (
    <Stack sx={styles.middleStack} spacing={4} alignItems="center">
      <Typography variant="subtitle1" component="h6" color="white" textAlign="center">
        { t('in_terms_of') }
      </Typography>
      <Typography variant="h2" component="h3" color="white" textAlign="center">
        { caption }
      </Typography>
      {
        guessedRight !== undefined &&
        <Typography variant="h2" component="h3" color={guessedRight ? "green" : "red"}>
          { guessedRight ? "RIGHT!" : "WRONG!"}
        </Typography>
      }
    </Stack>
  )
}

export default function MostSuccessFulPage() {
  const [quiz, setQuiz] = useState(generateQuiz())
  const navigate = useNavigate()

  const guessMostSuccessfull = (contender: Contender): void => {
    const otherContender = (contender.name === quiz.contender.left.name ? quiz.contender.right : quiz.contender.left)
    const guessedRight = (contender.value > otherContender.value)

    setQuiz({ ...quiz, guessedRight: guessedRight })
    if (!guessedRight) {
      setTimeout(() => {
        navigate('/game-over')
      }, 2000)
    }
  }

  return (
    <Stack direction="row" sx={styles.root}>
      {
        ((quiz.guessedRight === undefined) || (quiz.contender.left.value > quiz.contender.right.value)) &&
        <SideContender
          contender={quiz.contender.left}
          guessMostSuccessfull={guessMostSuccessfull}
          guessedRight={quiz.guessedRight}
          formatValue={quiz.query.formatValue}
          generateNewQuiz={() => setQuiz(generateQuiz())}
        />
      }
      {
        ((quiz.guessedRight === undefined) || (quiz.contender.left.value < quiz.contender.right.value)) &&
        <SideContender
          contender={quiz.contender.right}
          guessMostSuccessfull={guessMostSuccessfull}
          guessedRight={quiz.guessedRight}
          formatValue={quiz.query.formatValue}
          generateNewQuiz={() => setQuiz(generateQuiz())}
        />
      }
      <HomePanel categoryTitle={quiz.category.title} />
      <LanguageSwitcher />
      <MiddleCaption caption={quiz.query.caption} guessedRight={quiz.guessedRight} />
      {
        quiz.guessedRight === undefined &&
        <Avatar alt="VS" sx={styles.vs}>
          VS
        </Avatar>
      }
    </Stack>
  );
}

const styles = {
  root: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row"
    },
    height: "100vh"
  },
  homePanel: {
    position: "absolute",
    left: "5%",
    top: "5%",
  },
  middleStack: {
    position: "absolute",
    left: "50%",
    top: "20%",
    transform: "translate(-50%, -50%)"
  },
  side: {
    position: "relative",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  bgImg: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    objectFit: "cover",
    filter: "brightness(40%)",
    zIndex: -1
  } as React.CSSProperties,
  vs: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 100,
    height: 100,
    backgroundColor: "white",
    color: "black",
    fontSize: 28,
    fontWeight: "bold"
  }
}