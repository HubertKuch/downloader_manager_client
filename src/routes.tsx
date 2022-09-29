import React from "react";
import {
    createBrowserRouter, redirect,
} from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import AuthController from "./auth/AuthController";

export default createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        loader: async () => {
            if (!AuthController.isLoggedIn()) {
                return redirect("/login")
            }
        }
    },
    {
        path: "/login",
        element: <Login />
    }
]);