import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./Pages/Authorization/Login"
import MainPage from "./Pages/MainPage";
import Register from "./Pages/Authorization/Register";
import CreatorPage from "./Pages/CreatorPage";
import AdminPage from "./Pages/AdminPage";
import BookEditor from "./components/BookEditor/BookEditor";
import {useSelector} from "react-redux";

function App() {

    const displayNavbar = useSelector(state => state.appState.navbar.displayNavbar)

  return (
      <>
          <BrowserRouter>
              {displayNavbar ? <NavBar/> : null}
              <Routes>
                  <Route path={"/login"} element={<Login/>} />
                  <Route path={"/mainPage"} element={<MainPage/>} />
                  <Route path={"/"} element={<MainPage/>} />
                  <Route path={"/register"} element={<Register/>} />
                  <Route path={"/creatorPage"} element={<CreatorPage/>} />
                  <Route path={"/adminPage"} element={<AdminPage/>} />
                  <Route path={"/bookEditor"} element={<BookEditor/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
