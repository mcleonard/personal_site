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

  if (window.location.href.includes("sampyl")) {
    window.location.replace("http://mcleonard.github.io/sampyl/");
  }

  return (
    <div>
    <HashRouter>
      <div className='App'>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
        {/* // <Route path='/sampyl' component={() => {
        //         window.location.replace('http://mcleonard.github.io/sampyl/'); 
        //         return null;
        //           }}/> */}
        
      </div>
    </HashRouter>
    {/* <BrowserRouter basename="process.env.PUBLIC_URL">
      <Route path='/sampyl' component={() => {
                window.location.replace('http://mcleonard.github.io/sampyl/'); 
                return null;
                  }}/>
      </BrowserRouter> */}
    </div>
  );
}

export default App