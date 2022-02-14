import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Box, Avatar, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Contender } from '../data/types';
import { Link, useNavigate } from 'react-router-dom';
import { generateQuiz } from '../utils'
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useRecoilValue, useSetRecoilState } from "recoil"
import CurrentScore from '../components/CurrentScore';
import currentScoreAtom from '../recoil/atoms/currentScore';
import selectedCategoriesAtom from '../recoil/atoms/selectedCategories';
import compareCategories from '../data';

type SideContenderProps = {
  contender: Contender,
  namespace: string,
  guessMostSuccessfull: (contender: Contender) => void,
  guessedRight: boolean | undefined,
  unit: string,
  formatValue: ((value: number) => string) | undefined,
  goNext: (() => void)
}

function SideContender({ contender, namespace, guessMostSuccessfull, guessedRight, formatValue, unit, goNext } : SideContenderProps) {
  const { t, i18n } = useTranslation(['mostSuccessful', 'common', namespace])

  return (
    <Box sx={styles.side} >
      <img width="100%" height="100%" style={styles.bgImg} src={contender.imageUri} />
      <Stack spacing={2} alignItems="center" maxWidth={guessedRight === true ? "lg" : "sm"} sx={{ mt: (guessedRight !== undefined) ? 25 : 0 }} >
        <Typography variant={guessedRight === true ? "h2" : "h4"} component="h1" color="white" textAlign="center">
          { t(contender.name, { ns: namespace }) }
        </Typography>
        {
          guessedRight === undefined ?
          <>
            <Typography variant="subtitle1" component="p" color="white" textAlign="center">
              { i18n.languages[0] === "en" ? t("is", { ns: "common" }) : t('has', { ns: "common" }) }
            </Typography>
            <Button variant="contained" size="large" startIcon={<ArrowUpwardIcon />} onClick={() => guessMostSuccessfull(contender)}>
              { t('more_successful') }
            </Button>
          </>
          :
          <>
            <Typography variant="subtitle1" component="p" color="white" textAlign="center">
              {`
                ${i18n.languages[0] === "en" ? t("is", { ns: "common" }) : t('has', { ns: "common" })}
                ${t('most_successful_with') + ' '}
              `}
            </Typography>
            <Typography variant="h3" component="p" color="white" textAlign="center">
              {`
                ${formatValue ? formatValue(contender.value) : contender.value}
                ${t(unit, { ns: namespace })}
              `}
            </Typography>
          </>
        }
        {
          guessedRight === true &&
          <Button variant="contained" size="large" endIcon={<NavigateNextIcon />} onClick={goNext}>
            { t('next') }
          </Button>
        }
      </Stack>
    </Box>
  )
}

function HomePanel({ categoryTitle } : { categoryTitle: string }) {
  const namespace = categoryTitle.replace(' ', '')
  const { t } = useTranslation(['mostSuccessful', namespace])

  return (
    <Stack sx={styles.homePanel} direction="row" spacing={2} alignItems="center">
      <Link to='/'>
        <Button variant="contained" size="large">
          <HomeIcon />
        </Button>
      </Link>
      <Typography variant="subtitle1" component="h1" color="white" textAlign="center">
        { t('category') + ':' } { t(categoryTitle, { ns: namespace }) }
      </Typography>
    </Stack>
  )
}

type MiddleCaptionProps = {
  caption: string,
  namespace: string,
  guessedRight: boolean | undefined
}

function MiddleCaption({ caption, namespace, guessedRight } : MiddleCaptionProps) {
  const { t } = useTranslation(['mostSuccessful', namespace])

  return (
    <Stack sx={styles.middleStack} spacing={4} alignItems="center">
      <Typography variant="subtitle1" component="h6" color="white" textAlign="center">
        { t('in_terms_of') }
      </Typography>
      <Typography variant="h2" component="h3" color="white" textAlign="center">
        { t(caption, { ns: namespace }) }
      </Typography>
      {
        guessedRight !== undefined &&
        <Typography variant="h2" component="h3" color={guessedRight ? "green" : "red"}>
          { (guessedRight ? t("right") : t("wrong")) + '!'}
        </Typography>
      }
    </Stack>
  )
}

export default function MostSuccessFulPage() {
  const setCurrentScore = useSetRecoilState(currentScoreAtom)
  const selectedCategories = useRecoilValue(selectedCategoriesAtom)
  const [categories, setCategories] = useState(
    compareCategories.filter(category => selectedCategories.includes(category.title))
  )
  const [quiz, setQuiz] = useState(() => generateQuiz(categories, setCategories))
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentScore(0)
  }, [])

  const guessMostSuccessfull = (contender: Contender): void => {
    if (quiz === undefined) {
      return
    }
    const otherContender = (contender.name === quiz.contender.left.name ? quiz.contender.right : quiz.contender.left)
    const guessedRight = (contender.value > otherContender.value)

    setQuiz({ ...quiz, guessedRight: guessedRight })
    if (guessedRight) {
      setCurrentScore((currentScore) => currentScore + 1)
    } else {
      setTimeout(() => {
        navigate('/game-over')
      }, 2500)
    }
  }
  const goNext = () => {
    const nextQuiz = generateQuiz(categories, setCategories)
    if (nextQuiz === undefined) {
      navigate('/success')
    } else {
      setQuiz(nextQuiz)
    }
  }

  if (quiz === undefined) {
    return null
  }
  const namespace = quiz.category.title.replace(' ', '')
  return (
    <Stack direction="row" sx={styles.root}>
      {
        ((quiz?.guessedRight === undefined) || (quiz.contender.left.value > quiz.contender.right.value)) &&
        <SideContender
          contender={quiz.contender.left}
          namespace={namespace}
          guessMostSuccessfull={guessMostSuccessfull}
          guessedRight={quiz.guessedRight}
          formatValue={quiz.query.formatValue}
          unit={quiz.query.unit}
          goNext={goNext}
        />
      }
      {
        ((quiz.guessedRight === undefined) || (quiz.contender.left.value < quiz.contender.right.value)) &&
        <SideContender
          contender={quiz.contender.right}
          namespace={namespace}
          guessMostSuccessfull={guessMostSuccessfull}
          guessedRight={quiz.guessedRight}
          formatValue={quiz.query.formatValue}
          unit={quiz.query.unit}
          goNext={goNext}
        />
      }
      {
        !(quiz.guessedRight === false) &&
        <HomePanel
          categoryTitle={quiz.category.title}
        />
      }
      <LanguageSwitcher />
      <CurrentScore />
      <MiddleCaption
        caption={quiz.query.caption}
        namespace={namespace}
        guessedRight={quiz.guessedRight}
      />
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