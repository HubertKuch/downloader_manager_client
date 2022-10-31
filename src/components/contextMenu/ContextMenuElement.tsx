import React, {forwardRef} from "react";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";

const ContextMenuElement = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="context_menu hidden absolute left-1/2 top-1/2 w-64 h-80 rounded p-2" style={{background: ChosenThemeSettings.CONTEXT_MENU_COLOR}}>
            test
        </div>
    );
})

export default ContextMenuElement;
