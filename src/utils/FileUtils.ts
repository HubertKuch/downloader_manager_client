import InformationSize from "../models/InformationSize";
import File from "../models/File";

export default class FileUtils {

    public static getHumanInformationSize(current: InformationSize): string {
        if (!current) return "ERROR";

        interface HumanValues {
            [key: string]: string | undefined;
        }

        const HUMAN_VALUES: HumanValues = {
            "KILO_BYTE": "kb",
            "GIGA_BYTE": "GB"
        };

        return HUMAN_VALUES[current.unit];
    }

    public static pickIconClasses(file: File): string {
        interface IconsType {
            [key: string]: string | undefined;
        }

        const ICONS: IconsType = {
            "doc": "fa-solid fa-file-word",
            "xlsx": "fa-solid fa-file-excel",
            "txt": "fa-solid fa-file-lines",
            "zip": "fa-solid fa-file-zipper",
            "rar": "fa-solid fa-file-zipper",
            "jpg": "fa-solid fa-file-image",
            "webp": "fa-solid fa-file-image",
            "png": "fa-solid fa-file-image",
            "jpeg": "fa-solid fa-file-image",
        };

        return ICONS[file.extension] ?? "fa-solid fa-file";
    }
}