import React, {useRef} from "react";
import File from "../models/File";
import Error from "../models/Error";
import FileAPIConsumer from "../api/FileAPIConsumer";
import FileUtils from "../utils/FileUtils";
import Folder from "../models/Folder";

interface FolderAnchorProps {
    file: File;
    folder: Folder;
}

export default function ({ file, folder }: FolderAnchorProps){
    const downloadRef = useRef<HTMLAnchorElement>();

    return (
        <div
            className={"w-40 h-40 p-1 rounded directory-anchor"}
            style={{ background: "#30b88f" }}
            data-context-menu-actions-name={"file-actions"}
            data-file-id={file.id}
            data-folder-id={folder.id}
            title={file.name}
            onClick={async () => {
                const res: Error|File = await FileAPIConsumer.downloadFile(file.id);

                if (res.hasOwnProperty("error")) {
                    
                    return;
                }

                window.open((res as File).path);
            }}
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
