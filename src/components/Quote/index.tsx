import React from 'react'
import { Typography } from '@mui/material'
import style from './style.module.css'

export default function Quote() {
  return (
    <div className={style.out}>
        <Typography variant="h2" component="p" gutterBottom align="left" className={style.quote}>
            MAKE IT WORK,
        </Typography>
        <Typography variant="h2" component="p" gutterBottom align="center" className={style.quote}>
            MAKE IT RIGHT,
        </Typography>
        <Typography variant="h2" component="p" gutterBottom align="right" className={style.quote}>
            MAKE IT <em style={{color: "#e92c81"}}>FAST</em>.
        </Typography>
        <div style={{display: "flex", justifyContent:"space-between", color: "#888"}}>
            <div></div>
            <Typography variant="h6" component="p" gutterBottom align="left">
                &#8212; Kent Beck, software engineer and author, creator of Extreme Programming
            </Typography>
        </div>
    </div>
  )
}
