import Head from "next/head";
import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";
import { ReactElement, useEffect, useState } from "react";
import Header from "@/components/Header";
import { ConfigProvider, theme } from "antd";
import { getMediaQueryPreference } from "@/util";

const Page: NextPageWithLayout = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setDarkMode(getMediaQueryPreference(window) == "dark");
    }, []);

    return (
        <ConfigProvider
            theme={{
                algorithm: darkMode
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
            }}
        >
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header darkMode={darkMode} />
            </main>
        </ConfigProvider>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Page;
