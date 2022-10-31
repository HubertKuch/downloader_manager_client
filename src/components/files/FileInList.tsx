import React from "react";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";
import FileProps from "./FileProps";
import FileUtils from "../../utils/FileUtils";

export default function FileInList({ file, folder, downloadFileCallback }: FileProps): JSX.Element {
    return (
        <div
            style={{ background: ChosenThemeSettings.FILE_COLOR }}
            className={"w-full h-14 mt-4 p-2 rounded-2xl"}
            data-context-menu-actions-name={"file-actions"}
            onClick={() => downloadFileCallback(file)}
            data-folder-id={folder.id}
            data-file-id={file.id}
            title={file.name}
        >
            <i className={FileUtils.pickIconClasses(file)}></i>
            <span className={"ml-2"}>{file.name} {file.extension}</span>
            <span className={"float-right"}>{file.size.size}kb</span>
        </div>
    );
}
