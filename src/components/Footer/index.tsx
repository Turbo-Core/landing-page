import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@mui/material'
import style from './style.module.css'
import { FaGithub, FaBookOpen } from 'react-icons/fa'
import SignUpBox from '../partials/SignUpBox'

export default function index() {
  return (
    <div className={style.out}>
        <div className={style.columns}>
            <div className={style.column} style={{gap: "2rem"}}>
                <Link href="/">
                    <Image src="/logo.svg" alt="TurboCore" width={178} height={25}/>
                </Link>
                <Typography variant="body1" gutterBottom align="left" style={{color: "#888"}}>
                TurboCore is a fast, scalable, and reliable backend-as-a-service built with Rust. 
                </Typography>
            </div>
            <div className={style.column}>
                <Typography variant="h6" component="h6" gutterBottom align="left" fontWeight={900}> 
                    Resources
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                    <Link href="https://docs.turbocore.org/" className={style.link}>
                        <FaBookOpen size="1.5rem" />
                        <span style={{marginTop: "0.3rem"}}>Documentation</span>
                    </Link>
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                    <Link href="https://github.com/Turbo-Core/TurboCore" className={style.link}>
                        <FaGithub size="1.5rem"/>
                        <span style={{marginTop: "0.3rem"}}>GitHub</span>
                        </Link>
                </Typography>
                </div>
                <div className={style.column}>
                <Typography variant="h6" component="span" gutterBottom align="left" fontWeight={900}>
                    Sign up for early access!
                </Typography>
                <div style={{marginTop: "-30px", width:"100%"}}>
                    <SignUpBox type='email' placeholder='Email...'/>
                </div>
            </div>
        </div>
        <div style={{height: "1px", width: "100%", backgroundColor: "#666", margin: "1rem 0"}} />
        <Typography variant="body2" gutterBottom align="center" style={{color: "#888", marginTop: "50px"}}>
            TurboCore {new Date().getFullYear()} &copy; All rights reserved.
        </Typography>
    </div>
  )
}
