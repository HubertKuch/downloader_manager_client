import React from "react";
import File from "../models/File";
import InformationSize from "../models/InformationSize";
import Error from "../models/Error";
import FileAPIConsumer from "../api/FileAPIConsumer";
import {Simulate} from "react-dom/test-utils";
import transitionEnd = Simulate.transitionEnd;

export default function UserFileInList({file}: {file: File}): JSX.Element {
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
        <tr key={Math.random()}>
            <td>
                {file.name}
            </td>
            <td>
                {file.extension}
            </td>
            <td>
                {file.size.size}{getFileSizeUnitAsHumanValue(file.size)}
            </td>
            <td>
                <button
                    className={"rounded p-2 text-white"}
                    style={{background: "#f44160"}}
                    onClick={async (event) => {
                        const res: Error|File = await FileAPIConsumer.downloadFile(file.id);
                        let target: HTMLAnchorElement = (event.target as HTMLAnchorElement);

                        if ((event.target as HTMLInputElement).tagName !== "A") {
                            target = target.querySelector("a") as HTMLAnchorElement;
                        }

                        if (res.hasOwnProperty("error")) {
                            return;
                        }

                        target.setAttribute("href", (res as File).path);
                    }}
                >
                    <a>
                        Download
                    </a>
                </button>
            </td>
        </tr>
    )
}
