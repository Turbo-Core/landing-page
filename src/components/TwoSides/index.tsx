import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import style from "./style.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TwoSides({
    pre,
    left,
    right,
    reverseOnMD = false,
    ...props
}: {
    pre?: React.ReactNode;
    left: React.ReactNode;
    right: React.ReactNode;
    reverseOnMD?: boolean;
    [key: string]: any;
}) {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <>
            <Grid2
                container
                direction={
                    !md ? (reverseOnMD ? "column-reverse" : "column") : "row"
                }
                {...props}
            >
                <Grid2 md={6} className={style.center}>
                    {md && pre}
                    {left}
                </Grid2>
                <Grid2 md={6} className={style.center}>
                    {!md && pre}
                    {right}
                </Grid2>
            </Grid2>
        </>
    );
}
