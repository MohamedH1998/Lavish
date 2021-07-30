import react from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/pages/Navbar'
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'


import Footer from './components/pages/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/services" exact component={Services}/>
    <Route path="/services" exact component={Services}/>

    <Route path="/services" exact component={Services}/>


      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
