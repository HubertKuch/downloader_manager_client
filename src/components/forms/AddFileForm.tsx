import React, { useRef } from "react";

interface AddFileFormProps {
    handler: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function AddFileForm({
    handler
}: AddFileFormProps): JSX.Element {

    const allFilesCheckbox = useRef<HTMLInputElement>(null);
    const filesLabelRef = useRef<HTMLLabelElement>(null);
    const hasPasswordCheckboxRef = useRef<HTMLInputElement>(null);
    const passwordLabelRef = useRef<HTMLLabelElement>(null);

    const showOrHideFileInput = () => {
        filesLabelRef.current.classList.toggle("hidden");
    }

    const showOrHidePasswordLabel = () => {
        passwordLabelRef.current.classList.toggle("hidden");
    };

    return (
        <form className={"grid gap-4"} onSubmit={handler}>
            <div className={"error-container text-red-400"}></div>
            <label>
                Url to folder <br/>
                <input
                    type="text"
                    style={{background: "#323644"}}
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
                    style={{background: "#323644"}}
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

            <label ref={passwordLabelRef} className={"hidden"}>
                Password <br/>
                <input
                    type="text"
                    name={"password"}
                    style={{background: "#323644"}}
                    className={"outline-none p-2 rounded-2xl w-2/4"}
                />
            </label>

            <button className={"w-1/6 rounded p-1 text-white"} style={{background: '#f6985e'}}>Add file</button>

        </form>
    )
}