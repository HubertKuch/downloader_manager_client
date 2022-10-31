import React, {useRef} from "react";
import File from "../../models/File";
import Error from "../../models/Error";
import FileAPIConsumer from "../../api/FileAPIConsumer";
import FileUtils from "../../utils/FileUtils";
import Folder from "../../models/Folder";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";
import FileProps from "./FileProps";



export default function ({ file, folder, downloadFileCallback }: FileProps){
    const downloadRef = useRef<HTMLAnchorElement>();

    return (
        <div
            className={"w-40 h-40 p-1 rounded directory-anchor grid"}
            style={{ background: ChosenThemeSettings.FILE_COLOR }}
            data-context-menu-actions-name={"file-actions"}
            data-file-id={file.id}
            data-folder-id={folder.id}
            title={file.name}
            onClick={() => downloadFileCallback(file)}
        >
            <div className={"icon text-center"}>
                <i className={FileUtils.pickIconClasses(file)}></i>
            </div>
            <div className={"title"}>
                {file.name.length >= 12 ? file.name.substring(0, 12)+"..." : file.name}
            </div>
            <div className={"meta"}>
                {file.size.size} {FileUtils.getHumanInformationSize(file.size)}
                <a
                    download
                    ref={downloadRef}
                ></a>
            </div>
        </div>
    )
}
