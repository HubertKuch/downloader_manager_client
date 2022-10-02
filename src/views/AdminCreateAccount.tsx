import React from "react";
import MainLayout from "../components/MainLayout";
import AdminNav from "../components/AdminNav";
import AccountForm from "../components/AccountForm";

export default function AdminCreateAccount(): JSX.Element {
    return (
        <MainLayout nav={<AdminNav />}>

            <header className={"text-2xl mb-4"}>
                <h1>Create account</h1>
            </header>

            <main>
                <AccountForm />
            </main>

        </MainLayout>
    );
}