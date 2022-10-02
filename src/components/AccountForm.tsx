import React from "react";

export default function AccountForm(): JSX.Element {
    return (
        <form className={"form new-account-form grid grid-cols-1 gap-5 w-1/2"}>

            <label>
                Transfer <br/>
                <input
                    type="number"
                    className={"outline-none border-2 border-gray-400 rounded"}
                    value={50}
                    name={"transfer"}
                />GB
            </label>

            <label>
                Role <br/>
                <select
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
                    className={"outline-none border-2 border-gray-400 rounded"}
                    name={"expire-date"}
                />
            </label>

            <button className={"w-1/6 rounded p-1 text-white"} style={{background: '#456faa'}}>Create</button>

        </form>
    );
}
