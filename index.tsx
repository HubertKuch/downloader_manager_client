import * as React from "react";
import { createRoot } from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import routes from "./src/routes";
import "./src/style/output.css";
import "./src/style/base.css";

const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={routes}/> )