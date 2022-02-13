import React from 'react';
import { Stack, Select, FormControl, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import FranceFlag from '../assets/france_flag.png'
import USAFlag from '../assets/usa_flag.png'

const useStyles = makeStyles({
  select: {
      '&:before': {
          borderColor: 'white',
      },
      '&:after': {
          borderColor: 'white',
      },
      '&:not(.Mui-disabled):hover::before': {
          borderColor: 'white',
      },
  },
  icon: {
      fill: 'white',
  },
  root: {
      color: 'white',
  },
})

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const classes = useStyles()

  return (
    <Stack sx={style} direction="row"  alignItems="center">
      <img width="48" height="32" src={i18n.languages[0] === "en" ? USAFlag : FranceFlag} />
      <FormControl variant="standard" fullWidth>
        <Select
          id="language_select"
          className={classes.select}
          inputProps={{
              classes: {
                  icon: classes.icon,
                  root: classes.root,
              },
          }}
          renderValue={() => null}
          disableUnderline
          value={i18n.languages[0]}
          onChange={event => i18n.changeLanguage(event.target.value as string)}
        >
          <MenuItem value="en" color="white">
            English
          </MenuItem>
          <MenuItem value="fr">
            French
          </MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

const style = {
  position: "absolute",
  right: "5%",
  top: "5%"
}