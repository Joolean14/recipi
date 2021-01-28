// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar/Navbar';
import Contenedorgeneral from '../components/Contenedorgeneral/Contenedorgeneral';

function App() {
  return (<Router>
    <div className="">
      <Switch>
        {/* <Route path="/example">
          <Example/>
        </Route> */}
        <Route path='/home'>
          <Navbar />
          <Contenedorgeneral />
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
