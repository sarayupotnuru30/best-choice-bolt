import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Home } from './pages/Home';
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryDetail } from './pages/CategoryDetail';
import { ProductDetail } from './pages/ProductDetail';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { WishlistPage } from './pages/WishlistPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AccountPage } from './pages/AccountPage';
import { OffersPage } from './pages/OffersPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories/:slug" element={<CategoryDetail />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/search" element={<SearchResultsPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/offers" element={<OffersPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;