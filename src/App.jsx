import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header.jsx";
import { useFiltros } from "./hooks/useFiltros.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {

    const { filterProducts} = useFiltros()

    const filteredProducts = filterProducts(initialProducts)

  return (
    <>
        <Header/>
        <Products products={filteredProducts} />
        <Footer></Footer>
    </>
  )
}

export default App
