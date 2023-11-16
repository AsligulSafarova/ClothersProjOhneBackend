import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home'
import Contact from './components/Contact';
import Authentication from "../src/routes/Authentication";
import Shop from "./routes/Shops/index.jsx";
import CardIcon from './components/CardIcon/index.jsx';
import CheckOut from './routes/CheckOut/index.jsx';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop" element={<Shop />} />
          <Route path="basket" element={<CardIcon />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
