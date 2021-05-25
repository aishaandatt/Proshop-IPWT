import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen'
import ProfileScreen from './Screens/ProfileScreen'
import ShippingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import OrderScreen from './Screens/OrderScreen'
import UserListScreen from './Screens/UserListScreen'
import ProductListScreen from './Screens/ProductListScreen'
import ProductEditScreen from './Screens/ProductEditScreen'
import OrderListScreen from './Screens/OrderListScreen'
import UserEditScreen from './Screens/UserEditScreen'

function App() {
  return ( // return only one element always
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/search/:keyword' component={HomeScreen} />

          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/productlist' component={ProductListScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />

          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />

          <Route path='/admin/user/:id/edit' component={UserEditScreen} />

        </Container>

      </main>
      <Footer />
    </Router>
  );
}
//exact matches only / then only it shows
// :id is placeholder for now
//? to make it optional
export default App
