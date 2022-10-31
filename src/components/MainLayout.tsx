import React, { useLayoutEffect, useRef } from "react";
import ContextMenuElement from "./ContextMenuElement";
import ContextMenu from "../utils/ContextMenu";
import MainContextMenu from "../utils/MainContextMenu";

export default function MainLayout({ children, nav }: { children: any, nav: JSX.Element }): JSX.Element {
    const mainRef = useRef<HTMLDivElement>(null);
    const contextMenuRef = useRef<HTMLDivElement>(null);
    const contextMenu: ContextMenu = new MainContextMenu(contextMenuRef);

    useLayoutEffect(() => {
        document.addEventListener("click", () => contextMenu.hide());

        mainRef.current.addEventListener("contextmenu", (event: MouseEvent) => {
            const target: HTMLElement|null = contextMenu.setActions(event.target as HTMLElement)

            if (!target) {
                contextMenu.hide();
                return;
            }

            event.preventDefault();

            if (!contextMenu.isShowed()) contextMenu.show({  x: event.clientX, y: event.clientY  });
            else if (contextMenu.isShowed()) contextMenu.hide();

        });
    })

    return (
        <>
            {nav}
            <div ref={mainRef} className={"min-h-full float-right p-4 scroll-auto"} style={{width: "85%", background: "#2c2842"}}>
                {children}
            </div>
            <ContextMenuElement ref={contextMenuRef} />
        </>
    );
}
