"use strict";

import User, {UserRole} from "../models/User";
import UserAPIConsumer from "../api/UserAPIConsumer";
import BaseApiSettings from "../api/BaseApiSettings";

export default class AuthController {

    private static baseUrl: string = BaseApiSettings.BASE_URL;

    public static isLoggedIn(): boolean {
        return localStorage.getItem("token") !== null;
    }

    public static async login(accessCode: string): Promise<any> {
        const res = await fetch(`${this.baseUrl}/api/v1/auth/login/`, {
            method: "POST",
            body: JSON.stringify({accessCode}),
            headers: {
                "Content-Type": "application/json"
            }
        });

        return await res.json();
    }

    public static async hasAdminRights(): Promise<boolean> {
        if (!this.isLoggedIn()) return false;

        const user: User = await UserAPIConsumer.getLoggedInUser();

        return user.role === UserRole.ADMIN;
    }
}
