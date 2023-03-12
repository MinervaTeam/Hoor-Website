import React from "react";
import './App.css';
import './font/persian-badkh@t1.ttf';
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import FloatingDiv from "./components/FloatingDiv/FloatingDiv";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Services from "./components/Services/Services";

function App() {
    return (
        <div className="App">

            <Navbar />
            <Intro />
            <FloatingDiv />
            <Services />
            <Portfolio />
            <Testimonial />
            <Footer />
            
        </div>
    );
};

export default App;