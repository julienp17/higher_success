import React, { useState } from 'react';
import { Stack, Box, Avatar, Typography, Button, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import compareCategories from '../data';
import { Quiz, Contender } from '../data/types';
import { Link, useNavigate } from 'react-router-dom';

function getRandomElement<Type>(arr: Type[]): Type {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateQuiz(): Quiz {
  const category = getRandomElement(compareCategories)
  const query = getRandomElement(category.queries)
  const compared = getRandomElement(query.items)
  const contender = getRandomElement(query.items.filter(item => item.name !== compared.name))

  return ({
    category: category,
    query: query,
    contender: {
      left: compared,
      right: contender
    },
    guessedRight: undefined
  })
}

type SideContenderProps = {
  contender: Contender,
  guessMostSuccessfull: (contender: Contender) => void,
  guessedRight: boolean | undefined,
  formatValue: string | ((value: number) => string),
  generateNewQuiz: (() => void)
}

function SideContender({ contender, guessMostSuccessfull, guessedRight, formatValue, generateNewQuiz } : SideContenderProps) {
  return (
    <Box sx={styles.side} >
      <img width="100%" height="100%" style={styles.bgImg} src={contender.imageUri} />
      <Stack spacing={2} alignItems="center" >
        <Typography variant="h3" component="h1" color="white" textAlign="center">
          { `"${contender.name}"` }
        </Typography>
        <Typography variant="h6" component="p" color="white" textAlign="center">
          is
        </Typography>
        {
          guessedRight === undefined ?
          <Button variant="contained" size="large" startIcon={<ArrowUpwardIcon />} onClick={() => guessMostSuccessfull(contender)}>
            More successfull
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
  return (
    <Stack sx={styles.homePanel} direction="row" spacing={2} alignItems="center">
      <Link to='/'>
        <Button variant="contained" size="large">
          <HomeIcon />
        </Button>
      </Link>
      <Typography variant="h6" component="h1" color="white" textAlign="center">
        Category: { categoryTitle }
      </Typography>
    </Stack>
  )
}

function MiddleCaption({ caption, guessedRight } : { caption: string, guessedRight: boolean | undefined }) {
  return (
    <Stack sx={styles.middleStack} spacing={4} alignItems="center">
      <Typography variant="h4" component="h2" color="white" textAlign="center">
        In terms of...
      </Typography>
      <Typography variant="h2" component="h3" color="white" textAlign="center">
        { caption }
      </Typography>
      {
        guessedRight !== undefined &&
        <Stack direction="row" spacing={2}>
          <Typography variant="h2" component="h3" color="white">
            You're
          </Typography>
          <Typography variant="h2" component="h3" color={guessedRight ? "green" : "red"}>
            { guessedRight ? " RIGHT!" : " WRONG!"}
          </Typography>
        </Stack>
      }
    </Stack>
  )
}

export default function ChooseMostSuccess() {
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
