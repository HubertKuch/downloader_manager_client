import React from "react";
import NavLink from "./NavLink";
import User from "../../models/User";
import ProgressBar from "../utils/ProgressBar";
import FileUtils from "../../utils/FileUtils";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";

export default function MainNav({ user } : { user: User }): JSX.Element {

    const startTransfer = user.otherTransferSizes[0]?.startTransfer?.size;
    const currentTransfer = user.otherTransferSizes[0]?.transfer?.size;
    const howManyPercentIsUsed = (currentTransfer/startTransfer)*100;

    return (
        <nav className={"h-full fixed  items-center pt-4 pb-4"} style={{background: ChosenThemeSettings.SECONDARY_BACKGROUND_COLOR, width: "15%", color: ChosenThemeSettings.BASE_FONT_COLOR}}>
            <main className={"w-full"}>
                <NavLink text={"Files"} link={"/"} icon={<i className="fa-regular fa-folder"></i>} />
                <NavLink text={"History"} link={"/history"} icon={<i className="fa-solid fa-timeline"></i>} />
                <NavLink text={"Settings"} link={"/settings"} icon={<i className="fa-solid fa-gears"></i>} />
                <NavLink text={"FAQ"} link={"/faq"} icon={<i className="fa-solid fa-f"></i>} />
            </main>
            <footer className={"absolute bottom-0 p-4 text-xl w-full"}>
                <div>
                    <span>
                        {currentTransfer}
                    </span>
                    <span> / </span>
                    <span>
                        {startTransfer}
                    </span>
                    <span>
                        {' '}{FileUtils.getHumanInformationSize(user.otherTransferSizes[0]?.transfer)}
                    </span>
                </div>

                <ProgressBar progress={howManyPercentIsUsed} />

                <a href="/logout">Logout</a>
            </footer>
        </nav>
    );
}