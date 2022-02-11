import * as React from 'react';
import { Stack, Box, Avatar, Typography, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import USRappers from '../data/USRappers';

function Caption() {
  return (
    <Stack sx={styles.middleStack} spacing={6}>
      <Typography variant="h4" component="h2" color="white" textAlign="center">
        In terms of...
      </Typography>
      <Typography variant="h2" component="h3" color="white" textAlign="center">
        Grammy awards won
      </Typography>
    </Stack>
  )
}

export default function ChooseMostSuccess() {
  const items = USRappers
  const compared = items[Math.floor(Math.random() * items.length)]
  const filteredItems = items.filter(item => item.name !== compared.name)
  const contender = filteredItems[Math.floor(Math.random() * filteredItems.length)]

  return (
    <Stack direction="row" sx={styles.root}>
      <Box sx={styles.side} >
        <img width="100%" height="100%" style={styles.bgImg} src={compared.imageUri}/>
        <Typography  variant="h3" component="h1" color="white" textAlign="center">
          { `"${compared.name}"` }
        </Typography>
      </Box>
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
      <Caption />
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
