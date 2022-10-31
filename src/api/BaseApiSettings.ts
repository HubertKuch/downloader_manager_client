export default class BaseApiSettings {
    public static readonly PORT: string = "8080"
    public static readonly PROTOCOL: string = "http";
    public static readonly IP: string = "146.59.35.134";
    public static readonly BASE_URL: string = `${this.PROTOCOL}://${this.IP}:${this.PORT}`;
    public static BASIC_HEADERS: { [key: string]: string } = {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
    }
}