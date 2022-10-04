import React, {useRef} from "react";
import File from "../models/File";
import InformationSize from "../models/InformationSize";
import Error from "../models/Error";
import FileAPIConsumer from "../api/FileAPIConsumer";
import Folder from "../models/Folder";

export default function UserFileInList({folder}: {folder: Folder}): JSX.Element {
    const downloadButtonRef = useRef<HTMLAnchorElement>(null);

    const getFileSizeUnitAsHumanValue = (size: InformationSize): any => {
        interface HumanValues {
            [key: string]: string | undefined;
        }

        const HUMAN_VALUES: HumanValues = {
            "KILO_BYTE": "kb",
        };

        return HUMAN_VALUES[size.unit];
    }

    return (
        <div className={"grid grid-cols-2 folder"}>
            <div>
                {folder.account} - {folder.name} - {folder.url}
            </div>
            <div className={"text-right"}>
                <button>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>

            </div>

            <table className={"files"}>
                <tbody>
                {
                    folder.files.map((file) => {
                        return (
                            <tr>
                                <td>{file.name}</td>
                                <td>{file.extension}</td>
                                <td>{file.size.size}{' '}{getFileSizeUnitAsHumanValue(file.size)}</td>
                                <td>
                                    <button
                                        className={"rounded p-2 ml-4"}
                                        onClick={async (event) => {
                                            const res: Error|File = await FileAPIConsumer.downloadFile(file.id);

                                            if (res.hasOwnProperty("error")) {
                                                console.log(res)
                                                return;
                                            }

                                            downloadButtonRef.current.setAttribute("href", (res as File).path);
                                            downloadButtonRef.current.click()
                                        }}
                                    >
                                        <a
                                            ref={downloadButtonRef}
                                        >
                                            <i className="fa-regular fa-download"></i>
                                        </a>
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
