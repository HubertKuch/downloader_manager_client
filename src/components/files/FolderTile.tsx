import React from "react";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";
import FolderProps from "./FolderProps";

export default function ({ folder, showFolder }: FolderProps){
    return (
        <div
            title={folder.name}
            data-context-menu-actions-name={"folder-actions"}
            data-folder-id={folder.id}
            onClick={() => showFolder(folder.id)} className={"w-40 h-40 p-1 rounded directory-anchor grid"}
            style={{ background: ChosenThemeSettings.FOLDER_COLOR }}
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
