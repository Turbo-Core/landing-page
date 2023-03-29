import React from "react";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { useRouter } from "next/router";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { getMediaQueryPreference } from "@/util";
import { Martel_Sans } from "next/font/google";
import { NextSeo } from "next-seo";

const martel = Martel_Sans({ subsets: ["latin"], weight: ["600"] });

registerCoreBlocks();
export default function SignUp() {
    const [didMount, setDidMount] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
        setDidMount(true);
        setDarkMode(getMediaQueryPreference(window) == "dark");
    }, []);

    const router = useRouter();

    const formObj = {
        id: "1",
        title: "Sign Up for Early Access to TurboCore!",
        blocks: [
            {
                name: "short-text",
                id: "name",
                attributes: {
                    required: true,
                    label: "Let's start with your name",
                },
            },
            {
                label: "Usage",
                name: "multiple-choice",
                id: "usage",
                attributes: {
                    required: true,
                    label: "How will you use TurboCore?",
                    choices: [
                        {
                            label: "Personal",
                            value: "Personal",
                        },
                        {
                            label: "Business",
                            value: "Business",
                        },
                        {
                            label: "Education",
                            value: "Education",
                        },
                        {
                            label: "Other",
                            value: "Other",
                        },
                    ],
                    multiple: true,
                    verticalAlign: true,
                },
            },
            {
                name: "email",
                id: "email",
                attributes: {
                    required: true,
                    label: "How should we contact you?",
                    defaultValue: router.query.email,
                    description:
                        "We'll never share your email with anyone else. Promise :)",
                },
            },
        ],
        theme: {
            font: martel.style.fontFamily,
            backgroundColor: "rgb(var(--background-start-rgb))",
            logo: {
                src: darkMode ? "/logo.svg" : "/logo-dark.svg",
            },
            questionsColor: darkMode ? "#fff" : "#000",
            answersColor: darkMode ? "#fff" : "#000",
            buttonsFontColor: darkMode ? "#fff" : "#000",
            buttonsBgColor: darkMode ? "#e92c81" : "#5fcfff",
            buttonsBorderRadius: 32,
            errorsFontColor: "red",
            progressBarFillColor: darkMode ? "#fff" : "#000",
            progressBarBgColor: darkMode ? "#777" : "#aaa",
        },
        messages: {
            "block.defaultThankYouScreen.label": `Thank you for signing up for early access to TurboCore! We'll be in touch soon. </p>
                <div style='margin-top: 20px; font-size: 1rem'>In the meantime, check out our
                <a style="color: #5fcfff; text-decoration: underline;" href='https://twitter.com/TurboCoreBaaS' target='_blank'>Twitter</a>
                to stay up to date with our progress ;)</div>`,
        },
    };

    return (
        didMount && (
            <>
            <NextSeo
                        title="TurboCore Early Access"
                        description="Sign up for early access to TurboCore, the fastest way to build a backend for your web app."
                        canonical="https://turbocore.org/signup"
                        // openGraph={{todo: "TODO"}}
                        twitter={{
                            handle: "@TurboCoreBaaS",
                        }}
                />
            <div style={{ width: "100%", height: "100vh" }}>
                <Form
                    formId="1"
                    formObj={formObj}
                    onSubmit={async (
                        data,
                        {
                            completeForm,
                            setIsSubmitting,
                            setIsFieldValid,
                            setSubmissionErr,
                            setFieldValidationErr,
                        }
                    ) => {
                        setIsSubmitting(true);
                        let res = await fetch("/api/hello", {
                            method: "POST",
                            body: JSON.stringify(data),
                        });
                        res = await res.json();
                        if (res.message) {
                            setSubmissionErr(res.message);
                            setFieldValidationErr("email", res.message);
                            setIsFieldValid("email", false);
                        } else {
                            completeForm();
                        }
                        setIsSubmitting(false);
                    }}
                />
            </div>
            </>
        )
    );
}
