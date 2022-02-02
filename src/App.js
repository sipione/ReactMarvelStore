import Header from './Components/Header';
import Footer from './Components/Footer';
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import GlobalStyle from './UI/GlobalStyles';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Shop/>}/>
        <Route path={"/:id"} element={<Product/>}/>
        <Route path={"/cart"} element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
