import React, {useState} from "react";
import MainLayout from "../components/layouts/MainLayout";
import MainNav from "../components/nav/MainNav";
import UserAPIConsumer from "../api/UserAPIConsumer";
import User from "../models/User";
import HeaderText from "../components/utils/HeaderText";

export default function Faq() {
    const [ user ] = useState<User>(UserAPIConsumer.getUserFromStorage());

    return (
        <MainLayout nav={<MainNav user={user} />}>
            <HeaderText text={"Faq"} />
            <br/>

            <div className={"w-full h-full flex justify-center text-center"}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5H6JyOKTa9Y"
                        title="YouTube video player" frameBorder="0"
                        className={"m-auto mt-auto mb-auto"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>

        </MainLayout>

    )
}