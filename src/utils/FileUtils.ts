import InformationSize from "../models/InformationSize";

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
}