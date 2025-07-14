import { useEffect, useState } from 'react'
import PizzaCard from './PizzaCard'
import './_menu.scss'

export default function Menu() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/data/db-pizzas.json')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setProducts(data)
            })
            .catch((err) => {
                console.error('Failed to load products:', err)
            })
    }, [])

    return (
        <div className='menu'>
              <h1 className="menu__title">
                       Меню
                    </h1>
            <div className="pizza-list">
                {products.map(product => (
                    <PizzaCard key={product.id} product={product} />
                ))}
            </div>
        </div>

    )
}