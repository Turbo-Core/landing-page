import React from 'react'
import TwoSides from '@/components/TwoSides'
import { Typography } from '@mui/material'
import style from './style.module.css'
import Image from 'next/image'
import SignUpBox from '@/components/partials/SignUpBox'

export default function EarlyAccess() {
  return (
    <>
    <TwoSides
        pre={
            <Typography variant="h4" component="h2" gutterBottom className={style.signUp}>
                Sign up for early access
            </Typography>
        }
        left={
            <div className={style.signUp}>
                <Typography variant="body1" gutterBottom>
                    TurboCore is still in active development. Sign up for early access to be the first to try it out!
                </Typography>
                <SignUpBox type='email' placeholder='Email...' />
                <Typography variant="body2" style={{fontSize: "0.9rem", color: "gray", padding: "0.5rem 1rem"}}>
                    We hate spam even more than you do. We will never sell your email address or send you spam.
                </Typography>
            </div>
        }
        right={
            <Image src="launch.svg" width={500} height={500} alt="A rocket launching" style={{width: "100%", height: "auto", scale: "0.6"}}/>
        }
        reverseOnMD={true}
        style={{borderBottom: "1px solid rgba(127.5, 127.5, 127.5, 0.75)", borderTop: "1px solid rgba(127.5, 127.5, 127.5, 0.75)", marginTop: "-1rem", padding: "2rem 0"}}
    />
    {/* Change the padding when an image is added */}
    </>
  )
}