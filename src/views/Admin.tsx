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
                        <th>ID</th>
                        <th>Access code</th>
                        <th>Transfer</th>
                        <th>Files count</th>
                        <th>Role</th>
                        <th>Expiring date</th>
                        <th>Has active account</th>
                    </tr>
                </thead>

                <tbody>
                {
                    users.map(({
                                   id,
                                   role,
                                   accessCode,
                                   transfer,
                                   files,
                                   expiringDate,
                                   hasActiveAccount
                    }) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{accessCode}</td>
                                <td>{transfer.transfer.size} / {transfer.startTransfer.size} | {transfer.transfer.unit}</td>
                                <td>{files.length}</td>
                                <td>{role.valueOf()}</td>
                                <td>{expiringDate}</td>
                                <td>{hasActiveAccount ? "yes" : (hasActiveAccount === null ? "yes" : "no")}</td>
                            </tr>
                        );
                    })
                }
                </tbody>

            </table>

        </MainLayout>
    );
}