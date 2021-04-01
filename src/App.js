import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {Link} from 'react-router-dom';
import Order from './Component/Order/Order';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import { useState } from 'react';
import { createContext } from 'react';
import Admin from './Component/Admin/Admin';
import ManageProduct from './Component/ManageProduct/ManageProduct';
import CheckOut from './Component/CheckOut/CheckOut';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className="App">
        <Header></Header>
        <Link><p className="text-center">{loggedInUser.name}</p></Link>
        <br></br>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/order/:id">
            <Order></Order>
          </PrivateRoute>
          <Route path="/login">
            <Login><p className="text-center">{loggedInUser.name}</p></Login>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct></ManageProduct>
          </PrivateRoute>
          <PrivateRoute path="/checkOut">
            <CheckOut></CheckOut>
          </PrivateRoute>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
