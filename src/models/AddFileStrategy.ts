import {IncomingFileDTO, IncomingFolderDTO} from "./IncomingFileDTO";
import Error from "./Error";
import Folder from "./Folder";

export default abstract class AddFileStrategy {
    public abstract addFile(incomingFile: IncomingFileDTO|IncomingFolderDTO): Promise<Error|Folder>;
}