import React, { useState } from 'react';
import { Stack, Box, Avatar, Typography, Button, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import compareCategories from '../data';
import { Quiz, Contender } from '../data/types';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FranceFlag from '../assets/france_flag.png'
import USAFlag from '../assets/usa_flag.png'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <Stack sx={style} direction="row"  alignItems="center">
      <img width="48" height="32" src={i18n.languages[0] === "en" ? USAFlag : FranceFlag} />
      <FormControl variant="standard" fullWidth>
        <Select
          id="language_select"
          renderValue={(value) => null}
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