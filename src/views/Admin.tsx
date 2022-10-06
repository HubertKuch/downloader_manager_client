import React, {useEffect, useState} from "react";
import MainLayout from "../components/MainLayout";
import AdminNav from "../components/AdminNav";
import User from "../models/User";
import UserAPIConsumer from "../api/UserAPIConsumer";
import FileUtils from "../utils/FileUtils";

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
                                   folders,
                                   expiringDate,
                                   hasActiveAccount,
                                   otherTransferSizes
                    }) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{accessCode}</td>
                                <td>{otherTransferSizes[0]?.transfer?.size} / {otherTransferSizes[0]?.startTransfer?.size} {FileUtils.getHumanInformationSize(otherTransferSizes[0]?.startTransfer)}</td>
                                <td>{folders.reduce((previousValue, currentValue) => previousValue+currentValue.files.length, 0)}</td>
                                <td>{role.valueOf()}</td>
                                <td>{new Date(expiringDate).toLocaleString()}</td>
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