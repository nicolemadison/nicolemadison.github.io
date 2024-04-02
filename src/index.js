import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./App.css";
import { BrowserRouter, Routes, Route , HashRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import SuccessStories from "./pages/SuccessStories";
import Footer from "./components/Footer";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <div className="App">
            <Navbar/>
            <Routes>
            <Route path="/" exact element={<Homepage />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/success-stories" element={<SuccessStories/>} />
            </Routes>
            <Footer/>
        </div>
        </HashRouter>
  </React.StrictMode>
);
