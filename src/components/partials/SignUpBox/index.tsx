import React, { useState } from "react";
import style from "./style.module.css";

export default function SignUpBox({
    type = "text",
    placeholder = "",
    callback= () => {},
}: {
    type?: string;
    placeholder?: string;
    callback?: (s: string) => any;
}) {
    const [value, setValue] = useState("");
    return (
        <div className={style.outerBox}>
            <input
                type={type}
                className={style.input}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className={style.button} onClick={() => callback(value)}>Sign up</button>
        </div>
    );
}
