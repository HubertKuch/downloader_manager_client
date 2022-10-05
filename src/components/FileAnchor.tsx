import React, {useRef} from "react";
import File from "../models/File";
import Error from "../models/Error";
import FileAPIConsumer from "../api/FileAPIConsumer";
import FileUtils from "../utils/FileUtils";

interface FolderAnchorProps {
    file: File;
}

export default function ({ file }: FolderAnchorProps){
    const downloadRef = useRef<HTMLAnchorElement>();

    return (
        <div
            className={"w-40 h-40 p-1 rounded directory-anchor"}
            style={{ background: "#30b88f" }}
            title={file.name}
            onClick={async () => {
                const res: Error|File = await FileAPIConsumer.downloadFile(file.id);

                if (res.hasOwnProperty("error")) {
                    console.log(res)
                    return;
                }

                downloadRef.current.setAttribute("href", (res as File).path);

                downloadRef.current.click()
            }}
        >
            <div className={"icon text-center"}>
                <i className="fa-solid fa-file"></i>
            </div>
            <div className={"title"}>
                {file.name.length >= 12 ? file.name.substring(0, 12)+"..." : file.name}
            </div>
            <div className={"meta"}>
                {file.size.size} {FileUtils.getHumanInformationSize(file.size)}
                <a
                    ref={downloadRef}
                ></a>
            </div>
        </div>
    )
}
