import { CartIcon, ClearCartIcon } from "./Icons"
import './Cart.css'
import { useId } from "react"
import { useCart } from "../hooks/useCart"

function CartItem( {thumbnail, price, title, quantity, addToCart, RemoveFromCart}){
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <button onClick={RemoveFromCart}>-</button>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart () {

    const cartCheckboxId = useId()

    const { cart, clearCart, addToCart, RemoveFromCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden>
            </input>

            <aside className="cart">
                <ul>
                    {cart.map(product =>(
                        <CartItem
                            key={product.id}
                            addToCart= {() => addToCart(product)}
                            RemoveFromCart={() => RemoveFromCart(product)}
                            {...product}
                        />
                    ))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}