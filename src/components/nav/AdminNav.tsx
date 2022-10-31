import React from "react";
import NavLink from "./NavLink";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";

export default function AdminNav(): JSX.Element {
    return (
        <nav className={"h-full fixed  items-center pt-4 pb-4"} style={{background: ChosenThemeSettings.SECONDARY_BACKGROUND_COLOR, width: "15%", color: ChosenThemeSettings.BASE_FONT_COLOR}}>
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