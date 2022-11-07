import React, { useRef } from "react";
import ChosenThemeSettings from "../../settings/ChosenThemeSettings";

interface AddFileFormProps {
    handler: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function AddFileForm({
    handler
}: AddFileFormProps): JSX.Element {

    const allFilesCheckbox = useRef<HTMLInputElement>(null);
    const filesLabelRef = useRef<HTMLLabelElement>(null);
    const hasPasswordCheckboxRef = useRef<HTMLInputElement>(null);
    const folderPasswordRef = useRef<HTMLLabelElement>(null);
    const hamsterPasswordRef = useRef<HTMLLabelElement>(null);

    const showOrHideFileInput = () => {
        filesLabelRef.current.classList.toggle("hidden");
    }

    const showOrHidePasswordLabel = () => {
        folderPasswordRef.current.classList.toggle("hidden");
        hamsterPasswordRef.current.classList.toggle("hidden");
    };

    return (
        <form className={"grid gap-4"} onSubmit={handler}>
            <div className={"error-container text-red-400"}></div>
            <label>
                Url to folder <br/>
                <input
                    type="text"
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    name={"url"}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                    placeholder={"https://chomikuj.pl/ExampleChomik/Test+folder/folder"}
                />
            </label>

            <label>
                All files in folder {' '}
                <input
                    name={"whole-folder"}
                    ref={allFilesCheckbox}
                    onChange={showOrHideFileInput}
                    type="checkbox"
                />
            </label>
            
            <label ref={filesLabelRef}>
                File name <br/>
                <input
                    type={"text"}
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                    placeholder={"Example file.txt"}
                    name={"filename"}
                />
            </label>

            <label>
                With password{' '}
                <input
                    ref={hasPasswordCheckboxRef}
                    type="checkbox"
                    name={"has-password"}
                    onChange={showOrHidePasswordLabel}
                />
            </label>

            <label ref={folderPasswordRef} className={"hidden"}>
                Folder password <br/>
                <input
                    type="password"
                    name={"folder-password"}
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                />
            </label>

            <label ref={hamsterPasswordRef} className={"hidden"}>
                User password <br/>
                <input
                    type="password"
                    name={"hamster-password"}
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                />
            </label>

            <button className={"w-1/6 rounded p-1 "} style={{background: ChosenThemeSettings.SUBMIT_BUTTON_COLOR}}>Add file</button>

        </form>
    )
}