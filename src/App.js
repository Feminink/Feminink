// IMPORT PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import NotFound from "./pages/NotFound/NotFound";
import Inspiration from "./pages/Inspiration/Inspiration";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Messages from './pages/Messages/Messages'
import Message from "./pages/Message/Message";
// IMPORT REACT ROUTER
import { Route, Routes, Navigate } from "react-router-dom";

// IMPORT COMPONENTS
import HeaderComponent from "./layout/HeaderComponent/HeaderComponent";
import FooterComponent from "./layout/FooterComponent/FooterComponent";

// IMPORT STYLES
import "./App.scss";

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <main className="main">
        <div className="main-container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/gallery" element={<Gallery />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/inspiration" element={<Inspiration />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/signup" element={<Registration />}></Route>
            <Route exact path="/messages" element={<Messages />}></Route>
            <Route exact path="/messages/:id" element={<Message />}></Route>
            <Route exact path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
