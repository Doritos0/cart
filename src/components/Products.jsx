import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from '../hooks/useCart.jsx';

export function Products ({ products }) {

    /*
    const handle = () =>{
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data =>{
                console.log(data.products)
            });
    }*/

    const { addToCart, cart, RemoveFromCart } = useCart()

    const checkProductInCart = product =>{
        return cart.some(item => item.id == product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product =>{
                
                const isProductInCart = checkProductInCart(product)

                return (
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button 
                            style={{ backgroundColor : isProductInCart ? 'rgba(167, 62, 58, 1)' : 'rgb(5, 131, 83)'}}
                            onClick={() => isProductInCart ? RemoveFromCart(product)
                                : addToCart(product)
                            }>
                                {
                                    isProductInCart ? <RemoveFromCartIcon/> 
                                    : <AddToCartIcon/>
                                }
                            </button>
                        </div>
                    </li>
                )

                })
            }
            </ul>
        </main>
    )
}