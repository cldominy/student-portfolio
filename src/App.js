import React from "react";
import Footer from "./components/Footer";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App (){

    return(
        <>

        <HashRouter basename={process.env.PUBLIC_URL}>
        <Nav/>
        <Switch>

<Route exact path="/" component={ Home } />

<Route exact path="/portfolio" component= { Portfolio } />
<Route exact path="/contact" component={ Contact } />
<Route exact path="/about" component={ About } />
<Route path="/404" render={
  () => (
    <h2>404: NOT A VALID URL PATH!</h2>
  )}
/>
<Redirect to="/404" />;

</Switch>
        </HashRouter>
        <Footer/>
        </>
    )
}


// const App = () => <Home />;

export default App;