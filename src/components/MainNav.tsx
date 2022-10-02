import React from "react";
import NavLink from "./NavLink";

export default function MainNav(): JSX.Element {
    return (
        <nav className={"h-full fixed text-white items-center pt-4 pb-4"} style={{background: "#252728", width: "20%"}}>
            <main className={"w-full"}>
                <NavLink text={"Files"} link={"/"} icon={<i className="fa-regular fa-folder"></i>} />
            </main>
            <footer className={"absolute bottom-0 p-4 text-xl"}>
                <a href="/logout">Logout</a>
            </footer>
        </nav>
    );
}