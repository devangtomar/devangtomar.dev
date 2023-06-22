import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// Import your page components
import About from './app/About/About';
import Home from './app/Home/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/"
                    element={<Home/>}/>
                <Route path="/about"
                    element={<About/>}/>
            </Routes>
        </Router>
    );
}

export default App;
