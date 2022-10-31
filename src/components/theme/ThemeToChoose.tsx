import React, {useLayoutEffect, useRef} from "react";
import ThemeSettings from "../../settings/ThemeSettings";

interface ThemeToChooseProps {
    theme: ThemeSettings;
}

export default function ThemeToChoose(props: ThemeToChooseProps): JSX.Element {

    const ref = useRef<HTMLDivElement>();

    useLayoutEffect(() => {

        ref.current.addEventListener("click", () => {
            localStorage.setItem("theme", props.theme.NAME);
            window.location.reload();
        })

    }, [ ref ]);

    return (
        <div ref={ref}
             className={"rounded-full h-10 w-10 m-2 relative inline-block cursor-pointer hover:border-4 hover:border-white transition-all delay-[60] ease-out border border-black"}
             style={{background: props.theme.DOMAIN_COLOR}}
        />
    );
}