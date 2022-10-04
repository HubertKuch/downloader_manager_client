import React, {useEffect, useState} from "react";
import MainNav from "../components/MainNav";
import FileAPIConsumer from "../api/FileAPIConsumer";
import File from "../models/File";
import MainLayout from "../components/MainLayout";
import Modal from "../components/Modal";
import AddFileForm from "../components/AddFileForm";
import Error from "../models/Error";
import UserFileInList from "../components/UserFileInList";
import {DEFAULT_USER, User} from "../models/User";
import Folder from "../models/Folder";
import UserAPIConsumer from "../api/UserAPIConsumer";

export default function Main(): JSX.Element {
    const [folders, setFolders] = useState<Folder[]>([]);
    const [isAddFileModalOpen, setIsAddFileModalOpen] = useState<boolean>(false);
    const [user, setUser] = useState<User>(DEFAULT_USER);

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
                    <h1 className={"text-3xl"}>Your files</h1>
                </div>
                <div className={"text-right"}>
                    <button
                        className={"text-white p-2 pl-4 pr-4 rounded-xl"}
                        style={{background: "#0e93d4"}}
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
                <div className={"w-full"}>
                    {
                        folders.map(file => <UserFileInList key={file.id} folder={file} />)
                    }
                </div>
            </main>

            <Modal title={"Add new file"} onClose={() => setIsAddFileModalOpen(false)} isOpen={isAddFileModalOpen}>
                <AddFileForm handler={addFileHandler} />
            </Modal>
        </MainLayout>
    );
}