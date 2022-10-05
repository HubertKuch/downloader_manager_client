import React from "react";

export default function HeaderText({ text }: { text: string; }) {
    return <h1 className={"text-3xl text-whiter"}>{text}</h1>;
}
