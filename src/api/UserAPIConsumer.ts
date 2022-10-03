"use strict";

import User from "../models/User";
import NewUserDTO from "../models/NewUserDTO";

export default class UserAPIConsumer {

    private static baseUrl: string = "http://159.65.126.98:8080"

    public static async getLoggedInUser(): Promise<User> {
        const res: Response = await fetch(`${this.baseUrl}/api/v1/users/logged/`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });

        return await res.json()
    }

    public static async getUsers(): Promise<User[]> {
        const res: Response = await fetch(`${this.baseUrl}/api/v1/users/`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });

        return await res.json()
    }

    public static async saveUser(user: NewUserDTO): Promise<void> {
        await fetch(`${this.baseUrl}/api/v1/users/`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
    }
}
