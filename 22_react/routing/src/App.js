import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Header from './components/Header';
import PhotoPage from './pages/PhotoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductPage />} />
          {/* product  */}
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/photo" element={<PhotoPage />} />
          {/* *라우팅은 제일 밑에 있어야 함 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
