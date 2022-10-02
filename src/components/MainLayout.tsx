import React from "react";

export default function MainLayout({ children, nav }: { children: any, nav: JSX.Element }): JSX.Element {
    return (
        <>
            {nav}
            <div className={"h-full float-right p-4"} style={{width: "80%", background: "#E2E5E1"}}>
                {children}
            </div>
        </>
    );
}
