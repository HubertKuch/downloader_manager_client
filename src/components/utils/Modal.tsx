import React from "react";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";

interface ModalProps {
    children: JSX.Element;
    onClose: () => void;
    isOpen: boolean;
    title: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps): JSX.Element {
    if (!isOpen) return <></>;

    return (
        <>
            <div className={"layer fixed top-0 left-0 bg-black opacity-25 h-full w-full z-10"}></div>
            <div className={"fixed  left-1/2  top-1/2  transform  -translate-x-1/2  -translate-y-1/2  z-20 h-1/2 w-1/2 rounded p-4"}
                 style={{ background: ChosenThemeSettings.PRIMARY_BACKGROUND_COLOR, overflowY: "scroll" }}
            >
                <header className={"grid grid-cols-2 grid-rows-1 mb-4"}>
                    <div>
                        <h1 className={"text-2xl "}>
                            {title}
                        </h1>
                    </div>
                    <div className={"text-right text-xl"}>
                        <button onClick={onClose}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                </header>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}
