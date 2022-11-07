import {IncomingFileDTO} from "./models/IncomingFileDTO";

interface UnknownObject {[key: string]: string}

export default class FilesParser {

    public static parseToIncoming(data: UnknownObject): IncomingFileDTO {
        return {
            passwordData: {
                hasPassword: data.hasPassword,
                folderPassword: data.folderPassword,
                hamsterPassword: data.hamsterPassword,
            },
            fileName: data.fileName,
            url: data.url,
        } as unknown as IncomingFileDTO;
    }

}