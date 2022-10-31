"use strict";

import User from "../models/User";
import NewUserDTO from "../models/NewUserDTO";
import BaseApiSettings from "./BaseApiSettings";
import HttpUtils from "../utils/HttpUtils";

export default class UserAPIConsumer {

    private static baseUrl: string = BaseApiSettings.BASE_URL;

    public static async getLoggedInUser(): Promise<User> {
        const res: Response = await HttpUtils.get(`${this.baseUrl}/api/v1/users/logged/`, {
            headers: BaseApiSettings.BASIC_HEADERS,
        });

        return await res.json()
    }

    public static async getUsers(): Promise<User[]> {
        const res: Response = await HttpUtils.get(`${this.baseUrl}/api/v1/users/`, {
            headers: BaseApiSettings.BASIC_HEADERS,
        });

        return await res.json()
    }

    public static async saveUser(user: NewUserDTO): Promise<void> {
        await HttpUtils.post(`${this.baseUrl}/api/v1/users/`, {
            headers: BaseApiSettings.BASIC_HEADERS,
            body: JSON.stringify(user)
        });
    }
}
