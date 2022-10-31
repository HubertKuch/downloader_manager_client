"use strict";

import { IncomingFileDTO } from "../models/IncomingFileDTO";
import File from "../models/File";
import Error from "../models/Error";
import AddFileStrategy from "../models/AddFileStrategy";
import {SimpleAddFileStrategy} from "./SimpleAddFileStrategy";
import AddAllFilesFromFolderStrategy from "./AddAllFilesFromFolderStrategy";
import Folder from "../models/Folder";
import BaseApiSettings from "./BaseApiSettings";
import HttpUtils from "../utils/HttpUtils";

export default class FileAPIConsumer {

    private static baseUrl: string = BaseApiSettings.BASE_URL;

    public static async getUserFolders(): Promise<Folder[]> {
        const res = await HttpUtils.get(`${this.baseUrl}/api/v1/files/`, {
            headers: BaseApiSettings.BASIC_HEADERS,
        });

        return await res.json();
    }

    public static async addFile(incomingFile: IncomingFileDTO, wholeFolder: boolean = false): Promise<Folder|Error> {
        const strategies: { [key: string]: AddFileStrategy } = {
            simple: new SimpleAddFileStrategy(),
            wholeFolder: new AddAllFilesFromFolderStrategy()
        };

        let strategy: AddFileStrategy = wholeFolder ? strategies.wholeFolder : strategies.simple;

        return await strategy.addFile(incomingFile);
    }

    public static async downloadFile(fileId: string): Promise<File|Error> {
        const res = await HttpUtils.get(`${this.baseUrl}/api/v1/files/resource/${fileId}/`, {
            headers: BaseApiSettings.BASIC_HEADERS,
        })

        return await res.json();
    }

    public static async removeFile(folderId: string, fileId: string): Promise<File|Error> {
        const res = await HttpUtils.delete(`${this.baseUrl}/api/v1/files/file/`, {
            headers: BaseApiSettings.BASIC_HEADERS,
            body: JSON.stringify({folderId, fileId})
        });

        return await res.json();
    }

    public static async removeFolder(folderId: string): Promise<File|Error> {
        const res = await HttpUtils.delete(`${this.baseUrl}/api/v1/files/folder/`, {
            headers: BaseApiSettings.BASIC_HEADERS,
            body: JSON.stringify({folderId})
        });

        return await res.json();
    }
}
