import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import SuccessStories from "./pages/SuccessStories";
import Footer from "./components/Footer";

function App() {

    return (
        <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Routes>
            <Route path="/" exact element={<Homepage />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/success-stories" element={<SuccessStories/>} />
            </Routes>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;