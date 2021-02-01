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
    <Router basename={process.env.PUBLIC_URL}>
      <div className='App'>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
        <Route path="/sampyl" component={() => { 
               window.location.href = 'http://mcleonard.github.io/sampyl/'; 
               return null;}}/>
        
      </div>
    </Router>
  );
}

export default App