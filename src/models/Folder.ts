import File from "./File";

export default interface Folder {
    id: string;
    url: string;
    account: string;
    name: string;
    files: File[];
}