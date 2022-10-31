import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./Pages/Authorization/Login"
import MainPage from "./Pages/MainPage";
import Register from "./Pages/Authorization/Register";
import CreatorPage from "./Pages/CreatorPage";
import AdminPage from "./Pages/AdminPage";

function App() {
  return (
      <>
          <BrowserRouter>
              <NavBar/>
              <Routes>
                  <Route path={"/login"} element={<Login/>} />
                  <Route path={"/mainPage"} element={<MainPage/>} />
                  <Route path={"/"} element={<MainPage/>} />
                  <Route path={"/register"} element={<Register/>} />
                  <Route path={"/creatorPage"} element={<CreatorPage/>} />
                  <Route path={"/adminPage"} element={<AdminPage/>} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
