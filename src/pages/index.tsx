import Head from "next/head";
import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";
import { ReactElement, useEffect, useState } from "react";
import Header from "@/components/Header";
import { ConfigProvider, theme } from "antd";
import { getMediaQueryPreference } from "@/util";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Martel_Sans } from "next/font/google";
import EarlyAccess from "@/components/EarlyAccess";
import { NextSeo } from "next-seo";
import Features from "@/components/Features";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import NotAnEasterEgg from "@/components/NotAnEasterEgg";

const martel = Martel_Sans({ subsets: ["latin"], weight: ["600", "900"] });

const Page: NextPageWithLayout = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setDarkMode(getMediaQueryPreference(window) == "dark");
    }, []);

    return (
        <ThemeProvider
            theme={createTheme({
                typography: {
                    fontFamily: martel.style.fontFamily,
                },
                palette: {
                    mode: darkMode ? "dark" : "light",
                },
            })}
        >
            <ConfigProvider
                theme={{
                    algorithm: darkMode
                        ? theme.darkAlgorithm
                        : theme.defaultAlgorithm,
                }}
            >
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <NextSeo
                        title="TurboCore"
                        description="A fast, scalable, and reliable backend-as-a-service built with Rust."
                        canonical="https://turbocore.org/"
                        // openGraph={{todo: "TODO"}}
                        // twitter={{todo: "TODO"}}
                    />
                    <Header darkMode={darkMode} />
                    <EarlyAccess />
                    <Features />
                    <Quote />
                    <Footer />
                    <div
                        style={{
                            position: "relative",
                            bottom: "0",
                            left: "0",
                            opacity: "0.5",
                            fontSize: "0.8rem",
                        }}
                        className={martel.className}
                    >
                        <NotAnEasterEgg />
                    </div>
                </main>
            </ConfigProvider>
        </ThemeProvider>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Page;
