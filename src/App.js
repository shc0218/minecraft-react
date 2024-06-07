import {BrowserRouter, Route, Routes} from "react-router-dom";
import Root from "./route/root";
import Home from "./route/home";
import UserInfo from "./route/UserInfo";
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/home" element={<Home />} />
                <Route path="/info/:username" element={<UserInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
