import React, {useEffect, useState} from "react";
import MainNav from "../components/MainNav";
import MainLayout from "../components/MainLayout";
import {DEFAULT_USER, User} from "../models/User";
import UserAPIConsumer from "../api/UserAPIConsumer";
import HeaderText from "../components/HeaderText";
import SingleHistory from "../components/SingleHistory";

export default function History(): JSX.Element {
    const [user, setUser] = useState<User>(DEFAULT_USER);
    const getUser = () => {
        const get = async () => {
            return await UserAPIConsumer.getLoggedInUser();
        }

        useEffect(() => {
            get().then(r => {
                setUser(r)
                console.log(r.histories)
            });
            return () => {};
        }, []);
    }

    getUser()

    return (
        <MainLayout nav={<MainNav user={user} />}>
            <header className={"grid grid-cols-2 pb-5"}>
                <div>
                    <HeaderText text={"History"} />
                </div>
            </header>
            { user.histories.map(history => <SingleHistory history={history} />) }
        </MainLayout>
    );
}