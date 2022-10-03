"use strict";

import IncomingFileDTO from "../models/IncomingFileDTO";
import File from "../models/File";
import Error from "../models/Error";

export default class FileAPIConsumer {

    private static baseUrl: string = "http://159.65.126.98:8080"

    public static async getUserFiles(): Promise<File[]> {
        const res = await fetch(`${this.baseUrl}/api/v1/files/`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        return await res.json();
    }

    public static async addFile(incomingFile: IncomingFileDTO): Promise<File|Error> {
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

    public static async downloadFile(fileId: string): Promise<File|Error> {
        const res = await fetch(`${this.baseUrl}/api/v1/files/resource/${fileId}/`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })

        return await res.json();
    }
}
