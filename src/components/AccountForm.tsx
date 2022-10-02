import React from "react";

export default function AccountForm({ handler }: { handler: (event: React.FormEvent<HTMLFormElement>) => Promise<void>  }): JSX.Element {

    return (
        <form className={"form new-account-form grid grid-cols-1 gap-5 w-1/2"} onSubmit={handler}>

            <label>
                Transfer <br/>
                <input
                    defaultValue={50}
                    type="number"
                    className={"outline-none border-2 border-gray-400 rounded"}
                    name={"transfer"}
                />GB
            </label>

            <label>
                Role <br/>
                <select
                    defaultValue={1}
                    name="role"
                    className={"outline-none border-2 border-gray-400 rounded"}
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
                    className={"outline-none border-2 border-gray-400 rounded"}
                    name={"expire-date"}
                />
            </label>

            <button className={"w-1/6 rounded p-1 text-white"} style={{background: '#456faa'}}>Create</button>

        </form>
    );
}
