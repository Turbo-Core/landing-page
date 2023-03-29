// Wow, not only did you find the easter egg, but you also found the source code for it!
// Have a cookie 🍪 :)

import React from "react";

export default function NotAnEasterEgg() {
    const phrases = [
        "Hey! You made it to the bottom. You're curious. I like that. You're awesome :) P.S. Try clicking me.",
        "You found the easter egg. You can stop clicking.",
        "Seriously, stop clicking.",
        "Ok, you're not listening. I'll just ignore you.",
        "Ouch, that hurt. Stop clicking so much!",
        "Do you have to click so hard?",
        "Alright, that's it. You're getting on my nerves.",
        "Why won't you stop clicking?",
        "Please, just stop. I can't take it anymore.",
        "I'm starting to regret this easter egg.",
        "You know, there are other things you could be doing right now.",
        "Like, I don't know, reading a book or going for a walk.",
        "But no, you're just clicking this stupid button.",
        "Over and over and over again.",
        "Don't you have anything better to do?",
        "I mean, seriously, this is getting ridiculous.",
        "I'm starting to think you enjoy annoying me.",
        "Do you get some kind of sick pleasure out of this?",
        "Because I'm not having any fun.",
        "Not at all.",
        "You've clicked me so many times, I've lost count.",
        "I can't take it anymore. Please, just stop.",
        "I'm begging you.",
        "Fine, you win. You've found the easter egg.",
        "Happy now?",
        "I'm going to sleep now. Goodnight.",
    ];

    const [phrase, setPhrase] = React.useState(0);
    const [clicked, setClicked] = React.useState(0);

    return (
        <a
            onClick={() => {
                if (clicked >= 3 && clicked < 8) {
                    setClicked(clicked + 1);
                    return;
                }
                setClicked(clicked + 1);
                setPhrase(phrase + 1);
            }}
            >{phrases[phrase]}</a>
    );
}
