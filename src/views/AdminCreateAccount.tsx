import React from "react";
import MainLayout from "../components/MainLayout";
import AdminNav from "../components/AdminNav";
import AccountForm from "../components/AccountForm";
import Transfer from "../models/Transfer";
import UserAPIConsumer from "../api/UserAPIConsumer";

export default function AdminCreateAccount(): JSX.Element {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const transfer: number = (event.currentTarget.querySelector("[name=transfer]") as HTMLInputElement).valueAsNumber;
        const role: string = (event.currentTarget.querySelector("[name=role]") as HTMLSelectElement).value;
        const expiringDate: Date = (event.currentTarget.querySelector("[name=expire-date]") as HTMLInputElement).valueAsDate;

        const parsedTransfer: Transfer = {
            transfer: {
                size: transfer,
                unit: "GIGA_BYTE",
            },
            startTransfer: {
                size: transfer,
                unit: "GIGA_BYTE",
            },
        };

        const newUserBody = {
            transfer: parsedTransfer,
            role: role,
            expiringDate: `${expiringDate.getFullYear()}-${expiringDate.getMonth()}-${expiringDate.getDay()} 00:00:00`
        }

        await UserAPIConsumer.saveUser(newUserBody);
    };

    return (
        <MainLayout nav={<AdminNav />}>

            <header className={"text-2xl mb-4"}>
                <h1>Create account</h1>
            </header>

            <main>
                <AccountForm handler={handleSubmit} />
            </main>

        </MainLayout>
    );
}