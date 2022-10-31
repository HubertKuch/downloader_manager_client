import React, {useEffect, useState} from "react";
import MainLayout from "../components/layouts/MainLayout";
import MainNav from "../components/nav/MainNav";
import {DEFAULT_USER, User} from "../models/User";
import UserAPIConsumer from "../api/UserAPIConsumer";

export default function Settings(): JSX.Element {
    const [user, setUser] = useState<User>(DEFAULT_USER);
    const getUser = () => {
        const get = async () => {
            return await UserAPIConsumer.getLoggedInUser();
        }

        useEffect(() => {
            get().then(r => {
                setUser(r)

            });
            return () => {};
        }, []);
    }

    getUser()

    return (
        <>
            <MainLayout nav={<MainNav user={user} />}>

            </MainLayout>
        </>
    )
}