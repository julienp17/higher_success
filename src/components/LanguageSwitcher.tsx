import React from 'react';
import { Stack, Select, FormControl, MenuItem } from '@mui/material';
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