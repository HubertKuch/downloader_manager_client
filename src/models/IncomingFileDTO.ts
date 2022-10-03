interface IncomingFolderDTO {
    url: string;
}

interface IncomingFileDTO extends IncomingFolderDTO {
    fileName: string;
}

export { IncomingFileDTO, IncomingFolderDTO };