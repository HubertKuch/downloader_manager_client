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
    const hasPasswordInputRef = useRef<HTMLInputElement>(null);

    const showOrHideFileInput = () => {
        filesLabelRef.current.classList.toggle("hidden");
    }

    const showOrHidePasswordLabel = () => {
        folderPasswordRef.current.classList.toggle("hidden");
        hamsterPasswordRef.current.classList.toggle("hidden");
        const target = hasPasswordCheckboxRef.current;

        target.value = `${!!target.value}`;

    };

    return (
        <form className={"grid gap-4"} onSubmit={handler}>
            <div className={"error-container text-red-400"}></div>
            <input ref={hasPasswordInputRef} type="hidden" name={"hasPassword"} value={"false"} />
            <label>
                Wpisz adres folderu (URL)  <br/>
                <input
                    type="text"
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    name={"url"}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                    placeholder={"Przykladowy url https://chomikuj.pl/ExampleChomik/Test+folder/folder"}
                />
            </label>

            <label>
                Czy pobrac wszystkie pliki w folderze? {' '}
                <input
                    name={"whole-folder"}
                    ref={allFilesCheckbox}
                    onChange={showOrHideFileInput}
                    type="checkbox"
                />
            </label>
            
            <label ref={filesLabelRef}>
                Wpisz Nazwę pliku (Przykład.txt) <br/>
                <input
                    type={"text"}
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                    placeholder={"Np.: przykladowy plik.txt"}
                    name={"fileName"}
                />
            </label>

            <label>
                Folder lub chomik ma haslo?{' '}
                <input
                    ref={hasPasswordCheckboxRef}
                    type="checkbox"
                    name={"hasPassword"}
                    onChange={showOrHidePasswordLabel}
                />
            </label>

            <label ref={folderPasswordRef} className={"hidden"}>
                Wpisz hasło do danego folderu <br/>
                <input
                    type="password"
                    name={"folderPassword"}
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                />
            </label>

            <label ref={hamsterPasswordRef} className={"hidden"}>
                Gdy folder ma hasło na profil użytkownika <br/>
                <input
                    type="password"
                    name={"hamsterPassword"}
                    style={{background: ChosenThemeSettings.INPUT_BACKGROUND_COLOR}}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                />
            </label>

            <button className={"w-1/6 rounded p-1 "} style={{background: ChosenThemeSettings.SUBMIT_BUTTON_COLOR}}>Add file</button>

        </form>
    )
}