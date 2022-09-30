import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App";
import MyButton2 from "./components/MyButton2";
import "./index.css"

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <>
    <App/>
    
    </>
)