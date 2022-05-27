import React,{useState, useEffect} from "react";
import "./App.css";
import { GetData } from "./GetData";
import "./GetData.tsx"

export const App = () => {
    return (
        <div className="App">
            <header className = 'head' >
                <h2 className="text1">Данная страница поможет тебе найти пользователя github по его логину!</h2>
             </header>
            <GetData/>
        </div>
    );
};
