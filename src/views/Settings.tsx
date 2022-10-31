import React, {ChangeEvent, useLayoutEffect, useRef, useState} from "react";
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
    const chooseFileStructureFormRef = useRef<HTMLFormElement>(null);
    const fileStructureTypeRef = useRef<HTMLSelectElement>();

    function changeFileStructureType() {
        const type: string = fileStructureTypeRef.current.value;

        if (type === "") {
            return;
        }

        chooseFileStructureFormRef.current.submit();
        localStorage.setItem("file_structure_type", type);
    }

    return (
        <>
            <MainLayout nav={<MainNav user={user} />}>
                <HeaderText text={"Settings"} />

                <br/>

                <main>
                    <div>
                        <h2 className={"text-2xl mb-2"}>Appearance</h2>
                    </div>
                    <div>
                        <section>
                            <h2 className={""}>Choose your theme</h2>
                            <div>
                                { AvailableThemeSettings.map(theme => <ThemeToChoose key={theme.NAME} theme={theme} />) }
                            </div>
                        </section>
                        <br/>
                        <section>
                            <h2>Choose file structure type</h2>
                            <div>
                                <form ref={chooseFileStructureFormRef}>
                                    <select ref={fileStructureTypeRef} onChange={changeFileStructureType} name="FILE_STRUCTURE" className={"rounded"} style={{ background: ChosenThemeSettings.PRIMARY_BACKGROUND_COLOR, border: `1px solid ${ChosenThemeSettings.BASE_FONT_COLOR}` }}>
                                        <option value="">Choose</option>
                                        <option value="TILES">Tiles</option>
                                        <option value="LIST">List</option>
                                    </select>
                                </form>
                            </div>
                        </section>
                    </div>
                </main>

            </MainLayout>
        </>
    )
}