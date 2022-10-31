import React from "react";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";

export default function AccountForm({ handler }: { handler: (event: React.FormEvent<HTMLFormElement>) => Promise<void>  }): JSX.Element {

    return (
        <form className={"form new-account-form grid grid-cols-1 gap-5 w-1/2"} onSubmit={handler}>

            <label>
                Transfer <br/>
                <input
                    defaultValue={50}
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                    type="number"
                    name={"transfer"}
                />GB
            </label>

            <label>
                Role <br/>
                <select
                    defaultValue={1}
                    name="role"
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                >
                    <option value="1">USER</option>
                    <option value="0">ADMIN</option>
                </select>
            </label>

            <label>
                Expire date <br/>
                <input
                    type="date"
                    defaultValue={"2012-12-12 00:00:00"}
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                    name={"expire-date"}
                />
            </label>

            <button className={"w-1/6 rounded p-1 "} style={{background: ChosenThemeSettings.SUBMIT_BUTTON_COLOR}}>Create</button>

        </form>
    );
}
