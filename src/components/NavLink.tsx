import React from "react";

interface NavLinkProps {
    text: string;
    link: string;
    icon: JSX.Element;
}

export default function NavLink({ text, link, icon }: NavLinkProps): JSX.Element {
    return (
        <div className={"w-10/12 block ml-auto mr-auto rounded p-2 text-xl mt-4"} style={{background: "rgba(76, 126, 196, 83%)"}}>
            {icon}
            <span className={"pl-2 text-xl"}>
                <a href={link}>{text}</a>
            </span>
        </div>
    );
}