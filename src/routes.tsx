import React from "react";
import {
    createBrowserRouter, redirect,
} from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import AuthController from "./auth/AuthController";
import Admin from "./views/Admin";
import AdminCreateAccount from "./views/AdminCreateAccount";

const isLoggedInLoader = async () => {
    if (!AuthController.isLoggedIn()) {
        return redirect("/login")
    }
};

const adminLoader = async () => {
    if (!(await AuthController.hasAdminRights())) {
        return redirect("/login")
    }
}

export default createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        loader: isLoggedInLoader
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/admin",
        element: <Admin />,
        loader: adminLoader,
    },
    {
        path: "/create-account",
        element: <AdminCreateAccount />,
    },
    {
        path: "/logout",
        element: null,
        loader: () => {
            localStorage.removeItem("token");
            return redirect("/login");
        }
    }
]);