import React from "react";
import HackerEffect from "@/components/hackerEffect";
import { Nunito } from "next/font/google";
import { Button } from "antd";
import { FaBookOpen, FaStar } from "react-icons/fa";
import { ConfigProvider, theme } from "antd";
import classNames from "classnames";
import { Typography } from "@mui/material";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import style from "./style.module.css";

const nunitoBold = Nunito({ subsets: ["latin"], weight: "1000" });

export default function Header({ darkMode }: { darkMode: boolean }) {
    const themeHook = useTheme();
    const md = useMediaQuery(themeHook.breakpoints.down('md'));
    return (
        <>
        <div style={{display: "flex", flexDirection: "column", "alignItems": "center"}}>
            <div className={style.header}>
                <h1
                    className={classNames(nunitoBold.className, style.leadingText)}
                >
                    <HackerEffect
                        word="TurboCore"
                        className={style.leadingText}
                    />{" "}
                    is a <span style={{ color: "#5fcfff" }}>new</span> way to
                    build <span style={{ color: "#e92c81" }}>turbocharged</span>{" "}
                    backends.
                </h1>
            </div>
            <Typography variant="body1" className={style.bodyText}> 
            A fast, scalable, and reliable backend-as-a-service built with Rust. Designed to simplify app development, TurboCore lets you do all the traditional backend stuff without needing to develop a backend yourself.
            </Typography>
            <div className={style.actions}>
                <ConfigProvider
                    theme={{
                        algorithm: darkMode
                            ? theme.darkAlgorithm
                            : theme.defaultAlgorithm,
                    }}
                >
                    <Button size="large" shape="round" icon={<FaBookOpen />} href="https://docs.turbocore.org/">
                        Documentation
                    </Button>
                </ConfigProvider>
                <ConfigProvider
                    theme={{
                        algorithm: darkMode
                            ? theme.defaultAlgorithm
                            : theme.darkAlgorithm,
                    }}
                >
                    <Button size="large" shape="round" icon={<FaStar />} href="https://github.com/Turbo-Core/TurboCore">
                        Star on GitHub!
                    </Button>
                </ConfigProvider>
            </div>
            <ParallaxProvider>
                    <Parallax speed={md ? 5 : 20}>
                        <Image width={1600} height={900} className={style.parallaxImage} src="https://picsum.photos/1600/900" alt="dashboard" style={md ? {transform: "translateY(100px)"} : {} } loading="eager" />
                    </Parallax>
            </ParallaxProvider>
            <div style={md ? {height: "150px"} : {}} />
            {/* <div style={{height: "100px"}}/> */}
        </div>
        </>
    );
}