import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header.jsx";
import { useFiltros } from "./hooks/useFiltros.jsx";
import { Footer } from "./components/Footer.jsx";
import { Cart } from './components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';

function App() {

    const { filterProducts} = useFiltros()

    const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
        <Header/>
        <Cart/>
        <Products products={filteredProducts} />
        <Footer></Footer>
    </CartProvider>
  )
}

export default App
