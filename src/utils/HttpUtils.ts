export default class HttpUtils {

    public static async get(url: string, content: RequestInit): Promise<Response> {
        const response: Response = await fetch(url, content);

        return response;
    }

    public static async post(url: string, content: RequestInit): Promise<Response> {
        const response: Response = await fetch(url, {...content, method: "POST"});

        return response;
    }

    public static async delete(url: string, content: RequestInit): Promise<Response> {
        const response: Response = await fetch(url, {...content, method: "DELETE"});

        return response;
    }
}