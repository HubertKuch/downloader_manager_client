import { IncomingFolderDTO } from "../models/IncomingFileDTO";
import Error from "../models/Error";
import AddFileStrategy from "../models/AddFileStrategy";
import Folder from "../models/Folder";

export default class AddAllFilesFromFolderStrategy implements AddFileStrategy {

    private baseUrl: string = "http://159.65.126.98:8080"

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