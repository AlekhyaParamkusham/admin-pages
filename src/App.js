import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import LogoutModal from "./components/LogoutModal";
import Dashboard from "./components/Dashboard";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import Colors from "./Utilities/Colors";
import Borders from "./Utilities/Borders";
import Animations from "./Utilities/Animations";
import Other from "./Utilities/Others";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPass from "./Pages/ForgotPass";
import Page404 from "./Pages/Page404";
import BlankPage from "./Pages/BlankPage";
import Charts from "./components/Charts";
import Tables from "./components/Tables";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/forgotpassword">
            <ForgotPass />
          </Route>
          <Route exact path="/404Error">
            <Page404 />
          </Route>
          <Route exact path="/blank">
            <BlankPage />
          </Route>
          <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <SearchBar />

                <Route exact path="/buttons">
                  <Buttons />
                </Route>
                <Route exact path="/cards">
                  <Cards />
                </Route>
                <Route exact path="/colors">
                  <Colors />
                </Route>
                <Route exact path="/borders">
                  <Borders />
                </Route>
                <Route exact path="/animations">
                  <Animations />
                </Route>
                <Route exact path="/other">
                  <Other />
                </Route>
                <Route exact path="/charts">
                  <Charts />
                </Route>
                <Route exact path="/tables">
                  <Tables />
                </Route>
                <Route exact path="/logoutModal">
                  <LogoutModal />
                </Route>

                <Route exact path="/">
                  <Dashboard />
                </Route>
              </div>
              <Footer />
            </div>
          </div>

          <Link className="scroll-to-top rounded" to="#page-top">
            <i className="fas fa-angle-up"></i>
          </Link>

          <LogoutModal />
        </Switch>
      </Router>
    </>
  );
};

export default App;
