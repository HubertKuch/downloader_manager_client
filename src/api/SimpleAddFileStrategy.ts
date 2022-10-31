import {IncomingFileDTO, IncomingFolderDTO} from "../models/IncomingFileDTO";
import Error from "../models/Error";
import AddFileStrategy from "../models/AddFileStrategy";
import Folder from "../models/Folder";
import BaseApiSettings from "./BaseApiSettings";

export class SimpleAddFileStrategy implements AddFileStrategy {

    private baseUrl: string = BaseApiSettings.BASE_URL;

    public async addFile(incomingFile: IncomingFileDTO|IncomingFolderDTO): Promise<Folder|Error> {

        const res = await fetch(`${this.baseUrl}/api/v1/files/`, {
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