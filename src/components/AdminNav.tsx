import React from "react";
import NavLink from "./NavLink";

export default function AdminNav(): JSX.Element {
    return (
        <nav className={"h-full fixed text-white items-center pt-4 pb-4"} style={{background: "#252728", width: "20%"}}>
            <main className={"w-full"}>
                <NavLink
                    text={"Accounts"}
                    link={"/admin"}
                    icon={
                        <i className="fa-solid fa-users"></i>
                    }
                />

                <NavLink
                    text={"Create account"}
                    link={"/create-account"}
                    icon={
                        <i className="fa-solid fa-user-plus"></i>
                    }
                />
            </main>
        </nav>
    );
}