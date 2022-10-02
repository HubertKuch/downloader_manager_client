import React, {useEffect, useState} from "react";
import MainLayout from "../components/MainLayout";
import AdminNav from "../components/AdminNav";
import User from "../models/User";
import UserAPIConsumer from "../api/UserAPIConsumer";

export default function Admin(): JSX.Element {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {

        const getUsers = async () => {
            const users: User[] = await UserAPIConsumer.getUsers();
            console.log(users)
            setUsers(users);
        }

        getUsers().then()

        return () => {};
    }, []);

    return (
        <MainLayout nav={<AdminNav />}>

            <header>
                <h1>Accounts list</h1>
            </header>

            <table>

                <thead>
                    <tr>
                        <th>Access code</th>
                        <th>Transfer</th>
                        <th>Files count</th>
                        <th>Role</th>
                        <th>Expiring date</th>
                    </tr>
                </thead>

                <tbody>
                {
                    users.map(({role, accessCode, transfer, files}) => {
                        return (
                            <tr key={Math.random()}>
                                <td>{accessCode}</td>
                                <td>{transfer.transfer.size} / {transfer.startTransfer.size} | {transfer.transfer.unit}</td>
                                <td>{files.length}</td>
                                <td>{role.valueOf()}</td>
                                <td>12.12.2022</td>
                            </tr>
                        );
                    })
                }
                </tbody>

            </table>

        </MainLayout>
    );
}