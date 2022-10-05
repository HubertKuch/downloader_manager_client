import React from "react";
import NavLink from "./NavLink";
import User from "../models/User";
import ProgressBar from "./ProgressBar";

export default function MainNav({ user } : { user: User }): JSX.Element {

    const startTransfer = user.otherTransferSizes[0]?.startTransfer?.size;
    const currentTransfer = user.otherTransferSizes[0]?.transfer?.size;
    const howManyPercentIsUsed = (currentTransfer/startTransfer)*100;

    return (
        <nav className={"h-full fixed text-white items-center pt-4 pb-4"} style={{background: "#2a263e", width: "15%"}}>
            <main className={"w-full"}>
                <NavLink text={"Files"} link={"/"} icon={<i className="fa-regular fa-folder"></i>} />
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
                        {' '}{user.otherTransferSizes[0]?.transfer?.unit}
                    </span>
                </div>

                <ProgressBar progress={howManyPercentIsUsed} />

                <a href="/logout">Logout</a>
            </footer>
        </nav>
    );
}