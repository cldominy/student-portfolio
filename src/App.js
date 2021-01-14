import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App (){

    return(
        <>
        <Nav/>
        <Router>
        <Switch>

<Route exact path="/" component={ Home } />

<Route exact path="/portfolio" component= { Portfolio } />
<Route exact path="/contact" component={ Contact } />
<Route exact path="/about" component={ About } />
<Route exact path="/resume" component={ Resume } />
<Route path="/404" render={
  () => (
    <h2>404: NOT A VALID URL PATH!</h2>
  )}
/>
<Redirect to="/404" />;

</Switch>
        </Router>
        <Footer/>
        </>
    )
}


// const App = () => <Home />;

export default App;