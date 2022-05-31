import { Routes, Route, Link} from 'react-router-dom';
import "./App.css";
import { GetData } from "./GetData";
import { OwnPage } from "./OwnPage";
import "./GetData.tsx"
import "./OwnPage.tsx"

export const App = () => {
    return (
        <div className="App">
            <header className = 'head' >
                <h2 className="text1">Данная страница поможет тебе найти пользователя github по его логину!</h2>
             </header>
             <Routes>
                <Route path={process.env.REACT_APP_DEV === "true" ? "/lab9/build" : "/lab9/build"} element={<GetData/>}></Route>
                <Route path={process.env.REACT_APP_DEV === "true" ? "/cool" : "/cool"} element={<OwnPage/>}></Route>
            </Routes>
        </div>
    );
};
