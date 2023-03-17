import { useEffect, useState } from "react";

export default function HackerEffect({
    word,
    delay = 1000,
	auto = false,
    ...props
}: {
    word: string;
    delay?: number; // We want allow the user to pass any number of props
	auto?: boolean;
    [key: string]: any;
}) {
    const [wordState, setWordState] = useState(word);
    const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const effect = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            const newWord = word
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return letter;
                    }

                    return LETTERS[Math.floor(Math.random() * LETTERS.length)];
                })
                .join("");

            if (iteration >= word.length) {
                clearInterval(interval);
            }
            iteration += 1 / 2;
            setWordState(newWord);
        }, 50);
    };

	useEffect(() => {
		if (!auto) return;
		setTimeout(() => {
			effect();
		}, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [word]);

    return (
        <span {...props} onMouseEnter={effect}>
            {" "}
            {wordState}{" "}
        </span>
    );
}
