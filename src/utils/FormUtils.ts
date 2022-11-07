export default class FormUtils {

    public static getAsObject(target: HTMLFormElement): {[key: string]: string} {
        const formData: FormData = new FormData(target);
        const data: {[key: string]: string} = {};

        formData.forEach((value, key) => (data[key.toString()] = value.toString()));

        return JSON.parse(JSON.stringify(data));
    }

}

