import React from "react";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { useRouter } from "next/router";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { getMediaQueryPreference } from "@/util";
import { Martel_Sans } from "next/font/google";

const martel = Martel_Sans({subsets: ["latin"], weight: ["600"]})

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
                            value: "personal",
                        },
                        {
                            label: "Commercial",
                            value: "commercial",
                        },
                        {
                            label: "Academic",
                            value: "academic",
                        },
                        {
                            label: "Other",
                            value: "other",
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
                    description: "We'll never share your email with anyone else. Promise :)",
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
            "block.defaultThankYouScreen.label": "Thank you for signing up for early access to TurboCore! We'll be in touch soon.",
        }
    };

    return (
        didMount && (
            <div style={{ width: "100%", height: "100vh" }}>
                <Form
                    formId="1"
                    formObj={formObj}
                    onSubmit={(
                        data,
                        {
                            completeForm,
                            setIsSubmitting,
                            goToBlock,
                            setSubmissionErr,
                        }
                    ) => {
                        setTimeout(() => {
                            setIsSubmitting(false);
                            completeForm();
                        }, 500);
                    }}
                />
            </div>
        )
    );
}
