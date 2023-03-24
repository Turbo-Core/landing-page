import { Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import { Card as MCard, Paper } from "@mui/material";
import { IconType } from "react-icons";

export default function Card({
    Icon,
    title,
    description,
}: {
    Icon: IconType;
    title: string;
    description: string;
}) {
    return (
        <>
            {/* We're forced to define the gradient like this since the icons are SVGs*/}
            <svg width="0" height="0">
                <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                    <stop stop-color="rgb(233, 44, 129)" offset="0.2" />
                    <stop stop-color="#355DF0" offset="0.9" />
                </radialGradient>
            </svg>
            <MCard className={style.outsideDiv}>
                <Paper style={{ padding: "2rem" }} className={style.paper}>
                    <div style={{margin: "1.5rem 0"}}>
                        <Icon className={style.icon} />
                    </div>
                    <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        className={style.title}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        gutterBottom
                        className={style.description}
                    >
                        {description}
                    </Typography>
                </Paper>
            </MCard>
        </>
    );
}
