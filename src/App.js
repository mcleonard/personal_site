import React from 'react';
import { HashRouter, BrowserRouter, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './content/Home';
import About from './content/About';
import Projects from './content/Projects'
import Blog from './blog/Blog';
import Header from './components/Header'



function App() {
  return (
    <div>
    <HashRouter>
      <div className='App'>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
        
      </div>
    </HashRouter>
    <BrowserRouter basename="process.env.PUBLIC_URL">
      <div>
      <Route path='/sampyl' exact component={() => { 
                window.location.href = 'http://mcleonard.github.io/sampyl/'; 
                return null;
                  }}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App