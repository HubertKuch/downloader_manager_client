import React, {useState} from "react";
import MainLayout from "../components/layouts/MainLayout";
import MainNav from "../components/nav/MainNav";
import {User} from "../models/User";
import UserAPIConsumer from "../api/UserAPIConsumer";
import HeaderText from "../components/utils/HeaderText";
import ThemeToChoose from "../components/theme/ThemeToChoose";
import ChosenThemeSettings from "../settings/ChosenThemeSettings";
import AvailableThemeSettings from "../settings/AvailableThemeSettings";

export default function Settings(): JSX.Element {
    const [user, setUser] = useState<User>(UserAPIConsumer.getUserFromStorage);

    return (
        <>
            <MainLayout nav={<MainNav user={user} />}>
                <HeaderText text={"Settings"} />

                <br/>

                <main>
                    <div>
                        <h2 className={"text-2xl"}>Appearance</h2>
                    </div>
                    <div>
                        <h2 className={""}>Choose your theme</h2>
                        <div>
                            { AvailableThemeSettings.map(theme => <ThemeToChoose theme={theme} />) }
                        </div>
                    </div>
                </main>

            </MainLayout>
        </>
    )
}