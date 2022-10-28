import ContextMenuAction from "../utils/ContextMenuAction";
import FileAPIConsumer from "../api/FileAPIConsumer";
import File from "../models/File";

const FILES_CONTEXT_MENU_ACTIONS: ContextMenuAction[] = [
    {
        id: "DOWNLOAD",
        name: "Download",
        actionHandler: async (event: MouseEvent, contextMenuTarget: HTMLElement) => {
            const fileId: string = contextMenuTarget.getAttribute("data-file-id");
            const file: File = await FileAPIConsumer.downloadFile(fileId) as File;

            window.open(file.path);
        }
    },
    {
        id: "REMOVE",
        name: "Remove",
        actionHandler: (event: MouseEvent) => {
            console.log("File remove action")
        }
    },
];

export default FILES_CONTEXT_MENU_ACTIONS;

