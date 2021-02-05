import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../helpers";
import Contenedorgeneral from "../components/Contenedorgeneral/Contenedorgeneral";
import Contenedorinstruccion from "../components/Contenedorinstruccion/Contenedorinstruccion";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route path="/home/Seafood/:plat" component={Contenedorinstruccion} />
          <Route path="/home/Beef/:plat" component={Contenedorinstruccion} />
          <Route path="/home/Dessert/:plat" component={Contenedorinstruccion} />
          <Route path="/home/Goat/:plat" component={Contenedorinstruccion} />
          <Route path="/home/Lamb/:plat" component={Contenedorinstruccion} />
          <Route
            path="/home/Miscellaneous/:plat"
            component={Contenedorinstruccion}
          />
          <Route path="/home/Pasta/:plat" component={Contenedorinstruccion} />
          <Route path="/home/Pork/:plat" component={Contenedorinstruccion} />
          <Route path="/home/Side/:plat" component={Contenedorinstruccion} />
          <Route path="/home/Starter/:plat" component={Contenedorinstruccion} />
          <Route path="/home/Vegan/:plat" component={Contenedorinstruccion} />
          <Route
            path="/home/Vegetarian/:plat"
            component={Contenedorinstruccion}
          />
          <Route
            path="/home/Breakfast/:plat"
            component={Contenedorinstruccion}
          />
          <Route path="/home/Chicken/:plat" component={Contenedorinstruccion} />
          <Route path="/home/:id" component={Contenedorgeneral} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
