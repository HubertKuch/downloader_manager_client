import React from "react";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";

export default function ({ progress }: { progress: number }) {
    return (
        <div className={"progress-container w-full h-2 rounded-full"} style={{background: ChosenThemeSettings.PROGRESS_BAR_BACK}}>
            <div className={"progress-bar rounded-full h-2"} style={{background: ChosenThemeSettings.PROGRESS_BAR_FRONT, width: `${progress}%`}}>
            </div>
        </div>
    );
}
