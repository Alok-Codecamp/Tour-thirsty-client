import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Packages from './components/Packages/Packages';
import MyBooking from './components/MyBooking/MyBooking';
import ManageBookings from './components/ManageBookings/ManageBookings';
import AddPackage from './components/AddPackage/AddPackage';
import Login from './components/Login/Login';
import AuthProvider from './context/context';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/packages">
        <Packages></Packages>
        </Route>
      <PrivateRoute path="/mybooking">
        <MyBooking></MyBooking>
        </PrivateRoute>
      <PrivateRoute path="/managebooking">
        <ManageBookings></ManageBookings>
        </PrivateRoute>
      <PrivateRoute path="/addpackage">
        <AddPackage></AddPackage>
        </PrivateRoute>
      <Route path="/login">
        <Login></Login>
        </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
