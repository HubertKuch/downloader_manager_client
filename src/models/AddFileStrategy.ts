import {IncomingFileDTO, IncomingFolderDTO} from "./IncomingFileDTO";
import Error from "./Error";
import File from "./File";

export default abstract class AddFileStrategy {
    public abstract addFile(incomingFile: IncomingFileDTO|IncomingFolderDTO): Promise<Error|File>;
}