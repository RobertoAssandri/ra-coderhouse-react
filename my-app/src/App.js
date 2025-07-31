import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Container welcomeMessage="Catálogo de Productos">
                {/* Aquí irán los componentes de productos en el futuro */}
              </Container>
            }
          />
          <Route path="/products" element={<Container welcomeMessage="Nuestro catálogo" />} />
          <Route path="/contact" element={<div> Contacto </div>} />
          <Route path="/cart" element={<div> Carrito </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;