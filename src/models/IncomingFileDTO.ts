interface PasswordData {
    hasPassword: boolean;
    folderPassword: string;
    hamsterPassword: string;
}

interface IncomingFolderDTO {
    url: string;
    passwordData: PasswordData;
}

interface IncomingFileDTO extends IncomingFolderDTO {
    fileName: string;
}

export { IncomingFileDTO, IncomingFolderDTO };