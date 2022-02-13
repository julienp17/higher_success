import React from 'react'
import { Chip } from '@mui/material'
import { useTranslation } from "react-i18next"
import currentScoreAtom from '../recoil/atoms/currentScore'
import { useRecoilValue } from 'recoil'

export default function CurrentScore() {
  const { t } = useTranslation('mostSuccessful')
  const currentScore = useRecoilValue(currentScoreAtom)

  return (
    <Chip
      sx={style}
      label={`${t('current_score')}: ${currentScore}`}
      color="primary"
    />
  )
}

const style = {
  position: "absolute",
  left: "5%",
  bottom: "5%",
  zIndex: -1
}
