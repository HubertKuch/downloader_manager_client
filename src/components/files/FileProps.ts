import File from "../../models/File";
import Folder from "../../models/Folder";

export default interface FileProps {
    file: File;
    folder: Folder;
    downloadFileCallback: (file: File) => void;
}