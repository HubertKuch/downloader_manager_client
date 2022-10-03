import React from "react";

interface AddFileFormProps {
    handler: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function AddFileForm({
    handler
}: AddFileFormProps): JSX.Element {
    return (
        <form className={"grid gap-4"} onSubmit={handler}>
            <div className={"error-container text-red-400"}></div>
            <label>
                Url to folder <br/>
                <input
                    type="text"
                    name={"url"}
                    className={"outline-none border-2 border-gray-400 rounded w-2/4"}
                    placeholder={"https://chomikuj.pl/ExampleChomik/Test+folder/folder"}
                />
            </label>

            <label>
                File name <br/>
                <input
                    type={"text"}
                    className={"outline-none border-2 border-gray-400 rounded w-2/4"}
                    placeholder={"Example file.txt"}
                    name={"filename"}
                />
            </label>

            <button className={"w-1/6 rounded p-1 text-white"} style={{background: '#456faa'}}>Add file</button>

        </form>
    )
}