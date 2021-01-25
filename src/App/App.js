// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
function App() {
  return (<Router>
    <div className="">
      <Switch>
        {/* <Route path="/example">
          <Example/>
        </Route> */}
        <Route path='/home'>
          <Navbar/>
          {/* <Banner/>
          <Messages/>
          <Footer/> */}
        </Route>
        {/* <Route path='/booking'>
          <Header/>
          <Results/>
          <Results/>
          <Footer/>
        </Route>
        <Route path='/eshome'>
          <Cabezote/>
          <Fondo/>
          <Footer/>
        </Route> */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;
