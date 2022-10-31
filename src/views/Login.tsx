import React from "react";
import AuthController from "../api/auth/AuthController";
import ChosenThemeSettings from "../settings/ChosenThemeSettings";

export default function Login(): JSX.Element {

    async function onSubmit(event: any) {
        event.preventDefault();

        const accessCode: string = event.currentTarget.querySelector("[name=accessCode]").value;
        const errorDiv: HTMLDivElement = event.currentTarget.querySelector(".error");
        errorDiv.innerText = "";

        const res = await AuthController.login(accessCode);

        if (res.status === 400 && res.error.startsWith("Bad Request")) {
            errorDiv.innerText = "Access code is wrong";
            return;
        }

        if (res.status === 401) {
            errorDiv.innerText = "Your account expired. Contact with administrator.";
        }

        if (res.hasOwnProperty("error")) {
            errorDiv.innerText = "Error on login. Try again.";
        }

        localStorage.setItem("token", res.token.value);

        window.location.replace("/")
    }

    return (
        <>
            <div className={"w-1/4 mr-auto ml-auto top-1/2 relative"} style={{transform: "translateY(-50%)"}}>
                <form
                    className={"grid grid-cols-1 grid-rows-3 gap-4  p-5 rounded"}
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    onSubmit={onSubmit}
                >
                    <label>
                        Log in
                        <div className={"error text-red-500"}></div>
                    </label>
                    <label>
                        Access code <br/>
                        <input
                            placeholder={"cb984025-13c5-4e16-9b56-345bbc663ca1"}
                            style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                            type="text"
                            name={"accessCode"}
                            className={"rounded outline-none border-none p-2 w-full"}
                        />
                    </label>
                    <label>
                        <button
                            style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR, transform: "translateX(-50%)"}}
                            className={"pt-1 pb-1 pl-4 pr-4 rounded absolute left-1/2"}
                        >
                            Log in
                        </button>
                    </label>
                </form>
            </div>
        </>
    );
}
