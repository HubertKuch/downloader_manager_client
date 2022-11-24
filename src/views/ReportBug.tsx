import React, {useState} from "react";
import MainLayout from "../components/layouts/MainLayout";
import MainNav from "../components/nav/MainNav";
import User from "../models/User";
import UserAPIConsumer from "../api/UserAPIConsumer";
import HeaderText from "../components/utils/HeaderText";

export default function ReportBug() {
    const [user] = useState<User>(UserAPIConsumer.getUserFromStorage);

    return (
        <MainLayout nav={<MainNav user={user} />}>
            <HeaderText text={"Report a Bug"} />

        </MainLayout>
    )
}