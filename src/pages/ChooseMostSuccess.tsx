import * as React from 'react';
import { Stack, Box, Avatar, Typography, Button, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import compareCategories from '../data';
import { Item } from '../data/types';
import { Link } from 'react-router-dom';

function getRandomElement<Type>(arr: Type[]): Type {
  return arr[Math.floor(Math.random() * arr.length)]
}

function LeftCompared({ compared } : { compared: Item }) {
  return (
    <Box sx={styles.side} >
      <img width="100%" height="100%" style={styles.bgImg} src={compared.imageUri}/>
      <Typography variant="h3" component="h1" color="white" textAlign="center">
        { `"${compared.name}"` }
      </Typography>
    </Box>
  )
}

function RightContender({ contender } : { contender: Item }) {
  return (
    <Box sx={styles.side} >
      <img width="100%" height="100%" style={styles.bgImg} src={contender.imageUri} />
      <Stack spacing={2} alignItems="center">
        <Typography variant="h3" component="h1" color="white" textAlign="center">
          { `"${contender.name}"` }
        </Typography>
        <Typography variant="h6" component="p" color="white" textAlign="center">
          is
        </Typography>
        <Button variant="contained" size="large" startIcon={<ArrowUpwardIcon />}>
          More successfull
        </Button>
        <Button variant="contained" size="large" startIcon={<ArrowDownwardIcon />}>
          Less successfull
        </Button>
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

function MiddleCaption({ caption } : { caption: string }) {
  return (
    <Stack sx={styles.middleStack} spacing={6}>
      <Typography variant="h4" component="h2" color="white" textAlign="center">
        In terms of...
      </Typography>
      <Typography variant="h2" component="h3" color="white" textAlign="center">
        { caption }
      </Typography>
    </Stack>
  )
}

export default function ChooseMostSuccess() {
  const category = getRandomElement(compareCategories)
  const query = getRandomElement(category.queries)
  const compared = getRandomElement(query.items)
  const contender = getRandomElement(query.items.filter(item => item.name !== compared.name))

  return (
    <Stack direction="row" sx={styles.root}>
      <LeftCompared compared={compared} />
      <RightContender contender={contender} />
      <HomePanel categoryTitle={category.title} />
      <MiddleCaption caption={query.caption} />
      <Avatar alt="VS" sx={styles.vs}>
        VS
      </Avatar>
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
