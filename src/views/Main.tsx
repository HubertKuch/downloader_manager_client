import React, {useEffect, useState} from "react";
import MainNav from "../components/MainNav";
import FileAPIConsumer from "../api/FileAPIConsumer";
import File from "../models/File";
import InformationSize from "../models/InformationSize";
import MainLayout from "../components/MainLayout";

export default function Main(): JSX.Element {
    const [files, setFiles] = useState<File[]>([]);

    const getUserFiles = () => {
        const getFiles = async () => {
            return await FileAPIConsumer.getUserFiles();
        }


        useEffect(() => {
            getFiles().then(r => setFiles(r))

            return () => {};
        }, []);
    }

    const getFileSizeUnitAsHumanValue = (size: InformationSize): any => {
        interface HumanValues {
            [key: string]: string | undefined;
        }

        const HUMAN_VALUES: HumanValues = {
            "KILO_BYTE": "kb",
        };

        return HUMAN_VALUES[size.unit];
    }

    getUserFiles()

    return (
        <MainLayout nav={<MainNav />}>
            <header className={"grid grid-cols-2 pb-5"}>
                <div>
                    <h1 className={"text-3xl"}>Your files</h1>
                </div>
                <div className={"text-right"}>
                    <button
                        className={"text-white p-2 pl-4 pr-4 rounded-xl"}
                        style={{background: "#0e93d4"}}
                    >
                            <span className={"mr-3"}>
                                Add file
                            </span>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </header>
            <main className={"text-xl h-full scroll-auto"}>
                <table>
                    <tbody>
                    {
                        files.map(file => <tr key={file.id ?? Math.random()}>
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
                                    >
                                        <a>
                                            Download
                                        </a>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </main>
        </MainLayout>
    );
}