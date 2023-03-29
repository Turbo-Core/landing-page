import React, { useState } from "react";
import { useRouter } from 'next/router'
import style from "./style.module.css";

export default function SignUpBox({
    type = "text",
    placeholder = "",
}: {
    type?: string;
    placeholder?: string;
}) {
    const router = useRouter()
    const [value, setValue] = useState("");
    return (
        <div className={style.outerBox}>
            <input
                type={type}
                className={style.input}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className={style.button} onClick={() => {
                router.push(`/signup?email=${value}`)
            }}>Sign up</button>
        </div>
    );
}
