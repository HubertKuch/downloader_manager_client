import ContextMenuAction from "../utils/ContextMenuAction";

const FOLDER_CONTEXT_MENU_ACTIONS: ContextMenuAction[] = [
    {
        id: "DOWNLOAD",
        name: "Download",
        actionHandler: async (event: MouseEvent, contextMenuTarget: HTMLElement) => {

        }
    },
    {
        id: "REMOVE",
        name: "Remove",
        actionHandler: async (event: MouseEvent, contextMenuTarget: HTMLElement) => {

        }
    }
];

export default FOLDER_CONTEXT_MENU_ACTIONS;
