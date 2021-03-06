import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import FourZeroFour from "./pages/fourZeroFour/fourZeroFour";
// import Button from "react-bootstrap/Button";

function App() {
  localStorage.setItem("page", 1);
  sessionStorage.setItem("page", 1);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route>
            <FourZeroFour />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
