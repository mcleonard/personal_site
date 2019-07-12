import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './content/Home';
import About from './content/About';
import Projects from './content/Projects'
import Blog from './blog/Blog';
import Header from './components/Header'



function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App