import React from "react";
import NavLink from "./NavLink";
import User from "../models/User";

export default function MainNav({ user } : { user: User }): JSX.Element {
    console.log()
    return (
        <nav className={"h-full fixed text-white items-center pt-4 pb-4"} style={{background: "#2a263e", width: "15%"}}>
            <main className={"w-full"}>
                <NavLink text={"Files"} link={"/"} icon={<i className="fa-regular fa-folder"></i>} />
            </main>
            <footer className={"absolute bottom-0 p-4 text-xl"}>
                <div>
                    <span>
                        {user.otherTransferSizes[0]?.transfer?.size}
                    </span>
                    <span> / </span>
                    <span>
                        {user.otherTransferSizes[0]?.startTransfer?.size}
                    </span>
                    <span>
                        {' '}{user.otherTransferSizes[0]?.transfer?.unit}
                    </span>
                </div>
                <a href="/logout">Logout</a>
            </footer>
        </nav>
    );
}