import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ProfileScreen from './Screens/ProfileScreen'
import ShippingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import OrderScreen from './Screens/OrderScreen'


import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header/>
        <main className='py-3'>
          <Container>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/order/:id' component={OrderScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
          </Container>
        </main>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
