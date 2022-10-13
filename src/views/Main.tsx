import React, {useEffect, useRef, useState} from "react";
import MainNav from "../components/MainNav";
import FileAPIConsumer from "../api/FileAPIConsumer";
import MainLayout from "../components/MainLayout";
import Modal from "../components/Modal";
import AddFileForm from "../components/AddFileForm";
import Error from "../models/Error";
import {DEFAULT_USER, User} from "../models/User";
import Folder from "../models/Folder";
import UserAPIConsumer from "../api/UserAPIConsumer";
import HeaderText from "../components/HeaderText";
import FolderAnchor from "../components/FolderAnchor";
import FileAnchor from "../components/FileAnchor";

export default function Main(): JSX.Element {
    const [folders, setFolders] = useState<Folder[]>([]);
    const [isAddFileModalOpen, setIsAddFileModalOpen] = useState<boolean>(false);
    const [user, setUser] = useState<User>(DEFAULT_USER);
    const [isWaiting, setIsWaiting] = useState<boolean>(false);
    const [showedFiles, setShowedFiles] = useState<JSX.Element[]>([]);
    const waitingLayer = useRef<HTMLDivElement>();

    const mainContentRef = useRef<HTMLDivElement>();
    const filesInFolderContentRef = useRef<HTMLDivElement>();
    const actionsRef = useRef<HTMLDivElement>();
    const downloadFolderRef = useRef<HTMLButtonElement>();

    useEffect(() => {

        if (isWaiting) {
            waitingLayer.current.classList.remove("hidden");
        } else {
            waitingLayer.current.classList.add("hidden");
        }

    }, [ isWaiting ]);

    function showFolder(id: string) {
        const folder: Folder = folders.find((current) => current.id === id);

        mainContentRef.current.classList.toggle("hidden");
        filesInFolderContentRef.current.classList.remove("hidden");
        actionsRef.current.classList.remove("hidden")

        downloadFolderRef.current.addEventListener("click", async () => {
            filesInFolderContentRef
                .current
                .querySelectorAll(".directory-anchor")
                .forEach(el => (el as HTMLDivElement).click());
        });

        setShowedFiles(folder.files.map(file => <FileAnchor key={Math.random()} file={file} />));
    }

    const getUserFiles = () => {
        const getFiles = async () => {
            return await FileAPIConsumer.getUserFolders();
        }

        useEffect(() => {
            getFiles().then(r => {
                setFolders(r)
            })

            return () => {
            };
        }, []);
    }

    const getUser = () => {
        const get = async () => {
            return await UserAPIConsumer.getLoggedInUser();
        }

        useEffect(() => {
            get().then(r => setUser(r));
        }, []);

        return () => {};
    }

    const addFileHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        setIsWaiting(true);

        waitingLayer.current.classList.toggle("hiden");

        const url: string = (event.currentTarget.querySelector("[name=url]") as HTMLInputElement).value;
        const filename: string = (event.currentTarget.querySelector("[name=filename]") as HTMLInputElement).value;
        const errorContainer: HTMLDivElement = (event.currentTarget.querySelector(".error-container") as HTMLDivElement);
        const wholeFolderCheckbox: HTMLInputElement = (event.currentTarget.querySelector("[name=\"whole-folder\"]") as HTMLInputElement);

        const res: Error|Folder = await FileAPIConsumer.addFile(
            {url, fileName: filename},
            wholeFolderCheckbox.checked
        );

        if (res) {
            setIsWaiting(false);
        }

        if (res.hasOwnProperty("error")) {
            errorContainer.innerText = "Invalid data. Check url to folder and filename.";
            return;
        }

        setIsAddFileModalOpen(false);
        setFolders(await FileAPIConsumer.getUserFolders())
    }

    getUserFiles();
    getUser();

    return (
        <MainLayout nav={<MainNav user={user} />}>
            <header className={"grid grid-cols-2 pb-5"}>
                <div>
                    <HeaderText text={"Your files"} />

                    <div ref={actionsRef} className={"actions mt-2 text-sm hidden"}>
                        <button
                            className={"border border-white rounded-full p-2 pl-3 pr-3 transition-all transition delay-100 ease-linear hover:border-green-500 mr-6"}
                            ref={downloadFolderRef}
                        >
                            Download folder
                        </button>
                    </div>
                </div>
                <div className={"text-right"}>
                    <button
                        className={"text-white p-2 pl-4 pr-4 rounded-xl"}
                        style={{background: "#2cb589"}}
                        onClick={() => setIsAddFileModalOpen(true)}
                    >
                            <span className={"mr-3"}>
                                Add file
                            </span>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </header>
            <main className={"text-xl h-full scroll-auto"}>

                <div ref={mainContentRef} className={"w-full grid files"}>
                    {
                        folders.map(folder => <FolderAnchor key={Math.random()} showFolder={showFolder} folder={folder} />)
                    }
                </div>

                <div ref={filesInFolderContentRef} className={"w-full grid files hidden"}>
                    {showedFiles}
                </div>

            </main>

            <Modal title={"Add new file"} onClose={() => setIsAddFileModalOpen(false)} isOpen={isAddFileModalOpen}>
                <AddFileForm handler={addFileHandler} />
            </Modal>
            <div
                className={"hidden w-full h-full bg-gray-700 opacity-80 fixed top-0 left-0 text-center text-black text-3xl z-40 m-auto pt-1/2"}
                ref={waitingLayer}
            >
                Waiting...
            </div>
        </MainLayout>
    );
}