import { IncomingFolderDTO } from "../models/IncomingFileDTO";
import Error from "../models/Error";
import AddFileStrategy from "../models/AddFileStrategy";
import Folder from "../models/Folder";
import BaseApiSettings from "./BaseApiSettings";

export default class AddAllFilesFromFolderStrategy implements AddFileStrategy {

    private baseUrl: string = BaseApiSettings.BASE_URL;

    public async addFile(incomingFile: IncomingFolderDTO): Promise<Folder|Error> {

        const res = await fetch(`${this.baseUrl}/api/v1/files/whole-folder/`, {
            method: "POST",
            body: JSON.stringify(incomingFile),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })

        return await res.json();
    }

}