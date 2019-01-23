import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import {Route, Switch} from 'react-router-dom';
import HistoryPage from "./pages/HistoryPage";
import ContactPage from "./pages/ContactPage";
import UserProfilePage from "./pages/UserProfilePage";
import AboutPage from "./pages/AboutPage";
import SummariserPage from "./pages/SummariserPage";
import TutorialPage from "./pages/TutorialPage";
import SummariseWritePage from "./pages/SummariseWritePage";

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
				<Switch>
					  <Route exact path="/" component={SummariserPage} />
						<Route path="/history" component={HistoryPage} />
						<Route path="/contact" component={ContactPage} />
						<Route path="/user" component={UserProfilePage} />
						<Route path="/about" component={AboutPage} />
						<Route path="/tutorial" component={TutorialPage} />
						<Route path="/write" component={SummariseWritePage} />
				</Switch>
      </div>
    );
  }
}

export default App;
