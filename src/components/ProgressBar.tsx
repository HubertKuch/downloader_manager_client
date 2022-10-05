import React from "react";

export default function ({ progress }: { progress: number }) {
    return (
        <div className={"progress-container w-full h-2 rounded-full"} style={{background: "#0075ff"}}>
            <div className={"progress-bar rounded-full h-2"} style={{background: "#014daa", width: `${progress}%`}}>
            </div>
        </div>
    );
}
