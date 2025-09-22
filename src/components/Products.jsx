import './Products.css'
import { AddToCartIcon } from "./Icons.jsx";

export function Products ({ products }) {

    /*
    const handle = () =>{
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data =>{
                console.log(data.products)
            });
    }*/

    return (
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product =>(
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}