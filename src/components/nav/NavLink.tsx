import React from "react";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";

interface NavLinkProps {
    text: string;
    link: string;
    icon: JSX.Element;
}

export default function NavLink({ text, link, icon }: NavLinkProps): JSX.Element {
    return (
        <div className={"w-10/12 block ml-auto mr-auto rounded p-2 text-xl mt-4"} style={{background: ChosenThemeSettings.DOMAIN_COLOR, color: ChosenThemeSettings.BASE_FONT_COLOR }}>
            {icon}
            <span className={"pl-2 text-xl"}>
                <a href={link}>{text}</a>
            </span>
        </div>
    );
}