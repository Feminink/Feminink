// IMPORT PAGES
import Home from "./pages/Home/Home";
import Multi from "./pages/Multi/Multi";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
// IMPORT REACT ROUTER
import { Route, Routes, Navigate } from "react-router-dom";
// IMPORT COMPONENTS
import HeaderComponent from "./layout/HeaderComponent/HeaderComponent";
import FooterComponent from "./layout/FooterComponent/FooterComponent";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <NavigationComponent></NavigationComponent>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/multi" element={<Multi />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
