import "./App.css";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbar/Navbars";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Admission from "./components/Admission/Admission";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars></Navbars>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/admission">
            <Admission></Admission>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
