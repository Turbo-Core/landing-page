import React from 'react'
import TwoSides from '@/components/TwoSides'
import { Typography } from '@mui/material'
import style from './style.module.css'
import Image from 'next/image'

export default function index() {
  return (
    <>
    <TwoSides
        pre={
            <Typography variant="h4" component="h2" gutterBottom>
                Sign up for early access
            </Typography>
        }
        left={
            <div className={style.signUp}>
                <Typography variant="body1" gutterBottom>
                    TurboCore is still in active development. Sign up for early access to be the first to try it out!
                </Typography>
            </div>
        }
        right={
            <Image src="launch.svg" width={500} height={500} alt="A rocket launching" style={{width: "100%", height: "auto", scale: "0.6"}}/>
        }
        reverseOnMD={true}
    />
        <div style={{height: "600px"}}/> {/* This is a placeholder */}
    </>
  )
}