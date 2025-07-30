import { useEffect, useState } from 'react'

import PizzaCard from './PizzaCard'
import GradientBtn from '../gradientBtn/GradientBtn';

import './menu.scss'

export default function Menu() {
    const [products, setProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState('all')

    useEffect(() => {
        fetch('/data/db.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => {
                console.error('Помилка завантаження категорій: ', err)
            })
    }, [])

    const categories = {
        meat: 'Мясо',
        mushroom: 'Гриби',
        vegetarian: 'Вегетеріанська',
        seafood: 'Морепродукти',
        drink: 'Напої',
    }
    const filteredProducts = activeCategory === 'all' ? products : products.filter((el) => el.categories.includes(activeCategory))

    return (
        <div className='menu'>
            <h1 className="menu__title">
                Меню
            </h1>
            <div className='menu__filter-items'>
                <div className='menu__filter-item'>
                    <GradientBtn color={activeCategory === 'all' ? 'linear' : 'brown'} className="menu__filter-item-btn" onClick={() => setActiveCategory('all')}>
                        Показати все
                    </GradientBtn>
                </div>
                {Object.entries(categories).map(([key, label]) => (
                    <div className='menu__filter-item' key={key}>
                        <GradientBtn color={activeCategory === key ? 'linear' : 'brown'} className="menu__filter-item-btn" onClick={() => setActiveCategory(key)}>
                            {label}
                        </GradientBtn>
                    </div>
                ))}
            </div>
            <div className="pizza-list">
                {filteredProducts.map((product) => (
                    <PizzaCard key={product.id} product={product} />
                ))}
            </div>
        </div>

    )
}