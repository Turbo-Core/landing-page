import React from "react";
import style from "./style.module.css";
import Grid2 from "@mui/material/Unstable_Grid2";
import Card from "@/components/partials/Card";
import { Typography } from "@mui/material";
import { HiLightningBolt } from "react-icons/hi";
import { FaGlobe, FaExpandArrowsAlt, FaLock, FaFeather, FaLightbulb } from "react-icons/fa";
import { RiOpenSourceFill } from "react-icons/ri";
import { IoExtensionPuzzleSharp } from "react-icons/io5";

export default function Features() {
    return (
        <div className={style.outside}>
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                className={style.title}
                align="center"
            >
                Why use TurboCore?
            </Typography>
            {/*
                Features:
                - Lightning Fast
                - Easy to use
                - Open Source and Free
                - Cross Platform
                - Extensible
                - Secure
                - Lightweight
                - Customizable
            */}
            <Grid2 container spacing={5}>
                <Grid2 xs={12} sm={6} md={4}>
                    <Card
                        Icon={HiLightningBolt}
                        title="Lightning Fast"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non dicta fugit natus provident alias perspiciatis id expedita aperiam consequuntur? Voluptas, dolores? Omnis, deserunt at! Architecto facere explicabo illum mollitia."
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4}>
                    <Card
                        Icon={FaLightbulb}
                        title="Easy to use"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non dicta fugit natus provident alias perspiciatis id expedita aperiam consequuntur? Voluptas, dolores? Omnis, deserunt at! Architecto facere explicabo illum mollitia."
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4}>
                    <Card
                        Icon={RiOpenSourceFill}
                        title="Free & Open Source"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non dicta fugit natus provident alias perspiciatis id expedita aperiam consequuntur? Voluptas, dolores? Omnis, deserunt at! Architecto facere explicabo illum mollitia."
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4}>
                    <Card
                        Icon={FaGlobe}
                        title="Cross Platform"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non dicta fugit natus provident alias perspiciatis id expedita aperiam consequuntur? Voluptas, dolores? Omnis, deserunt at! Architecto facere explicabo illum mollitia."
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4}>
                    <Card
                        Icon={IoExtensionPuzzleSharp}
                        title="Extensible"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non dicta fugit natus provident alias perspiciatis id expedita aperiam consequuntur? Voluptas, dolores? Omnis, deserunt at! Architecto facere explicabo illum mollitia."
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4}>
                    <Card
                        Icon={FaLock}
                        title="Secure"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non dicta fugit natus provident alias perspiciatis id expedita aperiam consequuntur? Voluptas, dolores? Omnis, deserunt at! Architecto facere explicabo illum mollitia."
                    />
                </Grid2>
            </Grid2>
        </div>
    );
}
