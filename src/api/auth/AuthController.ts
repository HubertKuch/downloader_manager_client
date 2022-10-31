"use strict";

import User, {UserRole} from "../../models/User";
import UserAPIConsumer from "../UserAPIConsumer";
import BaseApiSettings from "../BaseApiSettings";
import HttpUtils from "../../utils/HttpUtils";

export default class AuthController {

    private static baseUrl: string = BaseApiSettings.BASE_URL;

    public static isLoggedIn(): boolean {
        return localStorage.getItem("token") !== null;
    }

    public static async login(accessCode: string): Promise<any> {
        const res = await HttpUtils.post(`${this.baseUrl}/api/v1/auth/login/`, {
            body: JSON.stringify({accessCode}),
            headers: BaseApiSettings.BASIC_HEADERS,
        });

        return await res.json();
    }

    public static async hasAdminRights(): Promise<boolean> {
        if (!this.isLoggedIn()) return false;

        const user: User = await UserAPIConsumer.getLoggedInUser();

        return user.role === UserRole.ADMIN;
    }
}
