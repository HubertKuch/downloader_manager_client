import React from "react";
import NavLink from "./NavLink";

export default function Nav(): JSX.Element {
    return (
        <nav className={"h-full fixed text-white items-center pt-4 pb-4"} style={{background: "#252728", width: "20%"}}>
            <NavLink text={"Files"} link={"tesdt"} icon={<i className="fa-regular fa-folder"></i>} />
            <NavLink text={"Account"} link={"tesdt"} icon={<i className="fa-regular fa-gear"></i>} />
        </nav>
    );
}