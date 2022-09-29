import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "./views/Main";

export default createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
]);