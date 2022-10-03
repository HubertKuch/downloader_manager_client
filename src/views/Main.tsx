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

export default function Main(): JSX.Element {
    const [files, setFiles] = useState<File[]>([]);
    const [isAddFileModalOpen, setIsAddFileModalOpen] = useState<boolean>(true);
    const [user, setUser] = useState<User>(DEFAULT_USER);

    const getUserFiles = () => {
        const getFiles = async () => {
            return await FileAPIConsumer.getUserFiles();
        }

        useEffect(() => {
            getFiles().then(r => setFiles(r))

            return () => {
            };
        }, []);
    }

    const addFileHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const url: string = (event.currentTarget.querySelector("[name=url]") as HTMLInputElement).value;
        const filename: string = (event.currentTarget.querySelector("[name=filename]") as HTMLInputElement).value;
        const errorContainer: HTMLDivElement = (event.currentTarget.querySelector(".error-container") as HTMLDivElement);

        const res: Error|File = await FileAPIConsumer.addFile({url, fileName: filename});

        if (res.hasOwnProperty("error")) {
            errorContainer.innerText = "Invalid data. Check url to folder and filename.";
            return;
        }

        setIsAddFileModalOpen(false);
        setFiles(await FileAPIConsumer.getUserFiles())
    }

    getUserFiles();

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
                <table>
                    <tbody>
                    {
                        files.map(file => <UserFileInList key={file.id} file={file} />)
                    }
                    </tbody>
                </table>
            </main>

            <Modal title={"Add new file"} onClose={() => setIsAddFileModalOpen(false)} isOpen={isAddFileModalOpen}>
                <AddFileForm handler={addFileHandler} />
            </Modal>
        </MainLayout>
    );
}