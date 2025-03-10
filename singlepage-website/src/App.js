import react from "react"
import GlobalStyle from "./GlobalStyles"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./compoents/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import Footer from "./compoents/Footer/Footer";
import ScrollToTop from "./compoents/ScrollToTop";
import Header from "./compoents/Header/Header";
import CheckOut from "./Pages/CheckOut/CheckOut";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/check-out" component={CheckOut} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
