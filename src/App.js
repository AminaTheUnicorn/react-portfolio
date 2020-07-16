import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import CaseStudies from "./pages/CaseStudies/CaseStudie";
import Contact from "./pages/Contact/Contact";
import Container from "./components/BodyContainer/Container";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
  <>
  <Router>
      <Container>
        <Navbar/>
        <Route exact path="/"component={Home} />
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/caseStudies" component={CaseStudies}/>
        <Route exact path="/contact" component={Contact}/>
      </Container>
    <Footer/>
  </Router>
   </>
  );
}

export default App;
