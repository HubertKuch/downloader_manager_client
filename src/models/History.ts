import File from "./File";

export default interface History {
    id: string;
    historyType: string;
    downloadedFiles: File[];
    at: number;
}