import React from "react";

export default function MainLayout({ children, nav }: { children: any, nav: JSX.Element }): JSX.Element {
    return (
        <>
            {nav}
            <div className={"min-h-full float-right p-4 scroll-auto"} style={{width: "85%", background: "#2c2842"}}>
                {children}
            </div>
        </>
    );
}
