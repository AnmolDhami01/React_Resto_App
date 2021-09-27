import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEdit,
  faTrashAlt,
  faListOl,
  faHome,
  faPlusCircle,
  faSearchDollar,
  faSearchLocation,
  faHotel,
  faSign,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestauranstList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import { Button, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Login from "./components/Login";

import Logout from "./components/Logout";
import Protected from "./components/Protected";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path="/list">
          <RestaurantList></RestaurantList>
        </Route>

        <Route path="/create">
          <RestaurantCreate></RestaurantCreate>
        </Route>

        <Route path="/search">
          <RestaurantSearch></RestaurantSearch>
        </Route> */}

        <Route path="/logout">
          <Logout />
        </Route>

        {/* <Route path="/update:id"
          render={props => (
            <RestaurantUpdate {...props} /> // HANDLING ALL PROPS
          )}
        > </Route> */}

        <Route
          path="/login"
          render={(props) => <Login {...props}></Login>}
        ></Route>

        {/* <Route path="/details">
          <RestaurantDetail></RestaurantDetail>
        </Route> */}

        {/* <Route path="/update/:id"
          render={props => (
            <RestaurantUpdate {...props} />
          )} >
        </Route> */}

        {/* <Route exact path="/">
          <Home></Home>
        </Route> */}

        <Protected path="/details" component={RestaurantDetail} />
        <Protected path="/update/:id" component={RestaurantUpdate} />
        <Protected path="/search" component={RestaurantSearch} />
        <Protected path="/create" component={RestaurantCreate} />
        <Protected path="/list" component={RestaurantList} />

        <Protected path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
