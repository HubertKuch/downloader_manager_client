import React from "react";
import FolderProps from "./FolderProps";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";

export default function FolderInList({ folder, showFolder }: FolderProps): JSX.Element {
    return (
        <div
            title={folder.name}
            data-context-menu-actions-name={"folder-actions"}
            data-folder-id={folder.id}
            onClick={() => showFolder(folder.id)}
            className={"w-full h-14 p-1 rounded directory-anchor mt-4 block"}
            style={{background: ChosenThemeSettings.FOLDER_COLOR}}
        >
            <span>
                {folder.account}
                {' '} | {' '}
                {folder.name}
            </span>
            <span className={"float-right"}>
                {folder.files.length} files
            </span>
        </div>
    );
}
