import React, {useEffect, useState} from "react";
import MainNav from "../components/nav/MainNav";
import MainLayout from "../components/layouts/MainLayout";
import {DEFAULT_USER, User} from "../models/User";
import UserAPIConsumer from "../api/UserAPIConsumer";
import HeaderText from "../components/utils/HeaderText";
import SingleHistory from "../components/SingleHistory";

export default function History(): JSX.Element {
    const [user, setUser] = useState<User>(UserAPIConsumer.getUserFromStorage());

    return (
        <MainLayout nav={<MainNav user={user} />}>
            <header className={"grid grid-cols-2 pb-5"}>
                <div>
                    <HeaderText text={"History"} />
                </div>
            </header>
            { user.histories.reverse().map(history => <SingleHistory history={history} />) }
        </MainLayout>
    );
}