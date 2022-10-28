import React from "react";
import History from "../models/History";

export default function ({ history }: { history: History }): JSX.Element {

    function getHistoryColor(history: History): string {
        const COLORS_BY_TYPE: { [key: string]: string } = {
            ADDED: "#36a688",
            DOWNLOAD: "#d2a183",
            DELETE_FILE: "#ba728d",
            DELETE_FOLDER: "#ba728d"
        }

        return COLORS_BY_TYPE[history.historyType] ?? "black";
    }

    function getHumanParsedHistoryType(history: History): string {
        const historyFilesSize: number = history.downloadedFiles
            .reduce((prev, curr) => prev + curr.size.size, 0);

        const NAME_BY_TYPE: { [key: string]: string } = {
            ADDED: "Added",
            DOWNLOAD: `Downloaded a ${history.downloadedFiles.length} files of ${historyFilesSize} kilobytes`,
            DELETE_FILE: `Deleted a ${history.downloadedFiles.length} files`,
            DELETE_FOLDER: `Deleted a folder`
        }

        return NAME_BY_TYPE[history.historyType] ?? "Unknown type."
    }

    return (
        <div className={"w-full rounded mt-4 p-3 text-xl"} style={{background: getHistoryColor(history)}}>
            <span>
                {new Date(history.at).toLocaleString()}
            </span>
            <span className={"float-right"}>
                {getHumanParsedHistoryType(history)}
            </span>
        </div>
    )
}