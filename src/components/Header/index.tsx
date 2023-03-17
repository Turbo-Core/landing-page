import React from "react";
import HackerEffect from "@/components/hackerEffect";
import { Nunito } from "next/font/google";
import { Button } from "antd";
import { FaBookOpen, FaStar } from "react-icons/fa";
import { ConfigProvider, theme } from "antd";
import classNames from "classnames";

import style from "./style.module.css";

const nunitoBold = Nunito({ subsets: ["latin"], weight: "800" });

export default function Header({ darkMode }: { darkMode: boolean }) {
    return (
        <>
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
        </>
    );
}