import React, {forwardRef} from "react";

const ContextMenuElement = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="contenxt_menu hidden absolute left-1/2 top-1/2 w-64 h-80 rounded p-2" style={{background: "#12151a"}}>
            test
        </div>
    );
})

export default ContextMenuElement;
