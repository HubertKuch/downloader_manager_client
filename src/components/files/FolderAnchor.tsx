import React from "react";
import Folder from "../../models/Folder";

interface FolderAnchorProps {
    folder: Folder;
    showFolder: Function;
}

export default function ({ folder, showFolder }: FolderAnchorProps){
    return (
        <div
            title={folder.name}
            data-context-menu-actions-name={"folder-actions"}
            data-folder-id={folder.id}
            onClick={() => showFolder(folder.id)} className={"w-40 h-40 p-1 rounded directory-anchor"}
            style={{ background: "#30b88f" }}
        >
            <div className={"icon text-center"}>
                <i className="fa-solid fa-folder"></i>
            </div>
            <div className={"title"}>
                {folder.name.length >= 12 ? folder.name.substring(0, 12)+"..." : folder.name}
            </div>
            <div className={"meta"}>
                <div className={"files-count w-1/2 float-left"}>
                    {folder.files.length} files
                </div>
            </div>
        </div>
    )
}
