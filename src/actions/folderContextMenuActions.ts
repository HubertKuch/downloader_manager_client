import ContextMenuAction from "../utils/ContextMenuAction";
import FileAPIConsumer from "../api/FileAPIConsumer";

const FOLDER_CONTEXT_MENU_ACTIONS: ContextMenuAction[] = [
    {
        id: "REMOVE",
        name: "Remove",
        actionHandler: async (event: MouseEvent, contextMenuTarget: HTMLElement) => {
            const folderId: string = contextMenuTarget.getAttribute("data-folder-id");

            await FileAPIConsumer.removeFolder(folderId);
            window.location.reload();
        }
    }
];

export default FOLDER_CONTEXT_MENU_ACTIONS;
