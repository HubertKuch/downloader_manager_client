import {IncomingFileDTO, IncomingFolderDTO} from "../models/IncomingFileDTO";
import Error from "../models/Error";
import AddFileStrategy from "../models/AddFileStrategy";
import Folder from "../models/Folder";
import BaseApiSettings from "./BaseApiSettings";
import HttpUtils from "../utils/HttpUtils";

export class SimpleAddFileStrategy implements AddFileStrategy {

    private baseUrl: string = BaseApiSettings.BASE_URL;

    public async addFile(incomingFile: IncomingFileDTO|IncomingFolderDTO): Promise<Folder|Error> {

        const res = await HttpUtils.post(`${this.baseUrl}/api/v1/files/`, {
            body: JSON.stringify(incomingFile),
            headers: BaseApiSettings.BASIC_HEADERS,
        })

        return await res.json();
    }

}