import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import News from './pages/News';
import Contact from './pages/Contact';
import Sustainability from './pages/Sustainability';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sustainability" element={<Sustainability />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
