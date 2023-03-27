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
            <Grid2 xs={12} sm={6} md={4} style={{display: "flex"}}>
                    <Card
                        Icon={HiLightningBolt}
                        title="Lightning Fast"
                        description="TurboCore is designed with speed in mind, using Rust's performance and efficiency to provide lightning-fast response times. With TurboCore, you can process large volumes of data quickly and easily, providing your users with the best possible experience.                        "
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4} style={{display: "flex"}}>
                    <Card
                        Icon={FaLightbulb}
                        title="Easy to use"
                        description="TurboCore is designed to be simple and intuitive, with an easy-to-use interface that makes it easy to get started. Whether you're a seasoned developer or a beginner, TurboCore is the perfect solution for building robust and reliable applications."
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4} style={{display: "flex"}}>
                    <Card
                        Icon={RiOpenSourceFill}
                        title="Free & Open Source"
                        description="TurboCore is an open-source solution that's free for everyone to use. This means you can access the source code, modify it, and contribute to the project. By choosing TurboCore, you'll be joining a vibrant community of developers and contributors who are passionate about building the best possible software."
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4} style={{display: "flex"}}>
                    <Card
                        Icon={FaGlobe}
                        title="Scalable"
                        description="TurboCore is a stateless solution that makes scaling simple and easy. You can replicate TurboCore instances to handle growing traffic and data volumes. This ensures that your application remains fast and responsive, even as your user base expands."
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4} style={{display: "flex"}}>
                    <Card
                        Icon={IoExtensionPuzzleSharp}
                        title="Extensible"
                        description="TurboCore is designed to be highly extensible, allowing you to add new features and functionality as your needs change. With a powerful plugin architecture and support for custom modules, you can easily extend TurboCore to meet your specific requirements."
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4} style={{display: "flex"}}>
                    <Card
                        Icon={FaLock}
                        title="Secure"
                        description="TurboCore takes security seriously, with built-in security features that protect your data and applications from unauthorized access. From encryption and access controls to secure connections and data backup, TurboCore provides the peace of mind you need to build secure and reliable applications."
                    />
                </Grid2>
            </Grid2>
            <Typography variant="body1" component="p" gutterBottom align="left" style={{marginTop: "2rem", color: "#889"}}>
                <sup>*</sup> These features are not yet implemented as TurboCore is still in active development {":)"}
            </Typography>
        </div>
    );
}
