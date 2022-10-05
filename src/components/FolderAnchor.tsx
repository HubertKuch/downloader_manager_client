import React from "react";
import Folder from "../models/Folder";

interface FolderAnchorProps {
    folder: Folder;
}

export default function ({ folder }: FolderAnchorProps){
    return (
        <a className={"cursor-pointer"} href={""}>
            <div className={"w-40 h-40 p-1 rounded directory-anchor"} style={{ background: "#30b88f" }}>
                <div className={"icon text-center"}>
                    <i className="fa-solid fa-folder"></i>
                </div>
                <div className={"title"}>Test folder</div>
                <div className={"meta"}>
                    <div className={"files-count w-1/2 float-left"}>
                        {folder.files.length} files
                    </div>
                </div>
            </div>
        </a>
    )
}
