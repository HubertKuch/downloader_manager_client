import React, {useEffect, useRef, useState} from "react";
import MainNav from "../components/MainNav";
import FileAPIConsumer from "../api/FileAPIConsumer";
import MainLayout from "../components/MainLayout";
import Modal from "../components/Modal";
import AddFileForm from "../components/AddFileForm";
import Error from "../models/Error";
import UserFileInList from "../components/UserFileInList";
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
    const [isWaiting, setIsWaiting] = useState<boolean>(true);
    const [showedFiles, setShowedFiles] = useState<JSX.Element[]>([]);
    const waitingLayer = useRef<HTMLDivElement>();

    const mainContentRef = useRef<HTMLDivElement>();
    const filesInFolderContentRef = useRef<HTMLDivElement>();

    const params = new URLSearchParams(new URL(window.location.toString()).searchParams);
    const folderId = params.get("id");

    function showFolder(id: string) {
        const folder: Folder = folders.find((current) => current.id === id);

        mainContentRef.current.classList.toggle("hidden");
        filesInFolderContentRef.current.classList.remove("hidden");

        setShowedFiles(folder.files.map(file => <FileAnchor file={file} />));

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
        waitingLayer.current.classList.toggle("hiden");

        const url: string = (event.currentTarget.querySelector("[name=url]") as HTMLInputElement).value;
        const filename: string = (event.currentTarget.querySelector("[name=filename]") as HTMLInputElement).value;
        const errorContainer: HTMLDivElement = (event.currentTarget.querySelector(".error-container") as HTMLDivElement);
        const wholeFolderCheckbox: HTMLInputElement = (event.currentTarget.querySelector("[name=\"whole-folder\"]") as HTMLInputElement);

        const res: Error|Folder = await FileAPIConsumer.addFile(
            {url, fileName: filename},
            wholeFolderCheckbox.checked
        );

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
                        folders.map(folder => <FolderAnchor showFolder={showFolder} folder={folder} />)
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