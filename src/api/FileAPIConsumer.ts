"use strict";

export default class FileAPIConsumer {

    private static baseUrl: string = "http://159.65.126.98:8080"

    public static async getUserFiles() {
        const res = await fetch(`${this.baseUrl}/api/v1/files/`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        return await res.json();
    }
}
