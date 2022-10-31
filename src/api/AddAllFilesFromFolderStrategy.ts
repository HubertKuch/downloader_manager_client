import { IncomingFolderDTO } from "../models/IncomingFileDTO";
import Error from "../models/Error";
import AddFileStrategy from "../models/AddFileStrategy";
import Folder from "../models/Folder";
import BaseApiSettings from "./BaseApiSettings";
import HttpUtils from "../utils/HttpUtils";

export default class AddAllFilesFromFolderStrategy implements AddFileStrategy {

    private baseUrl: string = BaseApiSettings.BASE_URL;

    public async addFile(incomingFile: IncomingFolderDTO): Promise<Folder|Error> {

        const res = await HttpUtils.post(`${this.baseUrl}/api/v1/files/whole-folder/`, {
            body: JSON.stringify(incomingFile),
            headers: BaseApiSettings.BASIC_HEADERS,
        })

        return await res.json();
    }

}