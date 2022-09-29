import InformationSize from "./InformationSize";

export default interface File {
    id: string;
    name: string;
    extension: string;
    size: InformationSize
}