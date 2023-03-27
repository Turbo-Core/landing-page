import React, {useRef, useEffect} from "react";

export default function Signup() {
    
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            const doc = iframe.contentWindow?.document;
            if (doc) {
                console.log(doc);
            }
        }
    }, []);

    return (
        <>
            <iframe
                src="https://alpha.turbocore.org/dashboard/#/nc/form/d9eef4f6-b9b2-46b8-b64a-08cea55aa9fc/survey"
                style={{ width: "100vw", height: "100vh", border: "none" }}
                ref={iframeRef}
            />
        </>
    );
}
