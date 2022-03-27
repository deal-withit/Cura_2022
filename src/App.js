import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./components";
import GlobalStyle from "./globalStyles";
import ComingSoon from "./ComingSoon";
import MainPage from "./components/MainPage";
import Competitions from "./components/Competitions";
import Speakers from "./components/Speakers";
import Workshops from "./components/Workshops";
import Teams from "./components/Teams";
import Partners from "./components/Partners";
import Result from "./components/Result"
function App() {
    return (
        <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" exact element={<MainPage />} />
                <Route path="/comingsoon" element={<ComingSoon />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/competitions" element={<Competitions />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/result" element={<Result/>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
