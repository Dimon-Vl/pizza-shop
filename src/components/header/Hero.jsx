import { useState, useEffect } from 'react'
import Modal from '../modal/Modal';

import basket from '../../assets/img/headerLogo/basket.svg'
import menu from '../../assets/img/headerLogo/menu.svg'
import pizzaMain from '../../assets/img/headerLogo/pizza-main.png'
import fries from '../../assets/img/headerLogo/fries.png'
import pizzaSlice from '../../assets/img/headerLogo/pizza-slice.png'
import './hero.scss'

export default function Hero() {
    const [isModalOpen, setModalOpen] = useState(false)
    const [orderData, setOrderData] = useState([])

    useEffect(() => {
        setOrderData(JSON.parse(localStorage.getItem('order') || '[]'))
    }, [isModalOpen])

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(orderData))
    }, [orderData])

    function handleConfirmOrder() {
        localStorage.removeItem('order')
        setOrderData([])
        alert('Замовлення прийнято!')
        setModalOpen(false)
    }

    function handleClearOrder() {
        localStorage.removeItem('order')
        setOrderData([])
    }

    function removeItem(index) {
        setOrderData(data => data.filter((_, i) => i !== index))
    }

    return (
        <section className="hero">
            <div className="hero__container">

                <header className="hero__header">
                    <h1 className="hero__logo">pizzashop</h1>
                    <div className="hero__actions">

                        <button className="hero__cart-btn" onClick={() => setModalOpen(true)}>
                            <img src={basket} alt="basket" />
                        </button>

                        <button className="hero__menu-btn">
                            <img src={menu} alt="Menu" />
                        </button>

                    </div>
                </header>

                <div className="hero__image-wrapper">
                    <div className="hero__image-wrapper-container">
                        <img src={pizzaMain} alt="Main Pizza" className="hero__main-img" />
                        <img src={fries} className="hero__decoration hero__decoration--fries" alt="" />
                        <img src={pizzaSlice} className="hero__decoration hero__decoration--pizza" alt="" />
                    </div>
                </div>

                <div className="hero__content">

                    <h1 className="hero__title">
                        Найшвидша<br />
                        Доставка <span>Піцци</span>
                    </h1>

                    <p className="hero__text">
                        Ми доставимо смачну піццу до вас всього за 30 хвилин,<br />
                        якщо довлять пізніше – <span>піцца безкоштовно!</span>
                    </p>

                    {/* <div className="hero__buttons">
                        <button className="hero__btn hero__btn--primary">To order</button>
                        <button className="hero__btn hero__btn--outline">Pizza-Menu</button>
                    </div>

                    <div className="hero__video">
                        <img src="img/pizza-video.png" alt="Cooking process" />
                        <button className="hero__play-btn">
                            <img src="img/icons/play.svg" alt="Play" />
                        </button>
                    </div> */}

                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} className={'hero'}>
                {orderData.length > 0 ? (
                    <div>
                        <table className="hero__order-table">
                            <thead>
                                <tr>
                                    <th>Назва</th>
                                    <th>Кількість</th>
                                    <th>Розмір</th>
                                    <th>Ціна</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderData.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.size} {item.type === 'drink' ? 'мл' : 'см'}</td>
                                        <td>{(item.price * item.quantity).toFixed(2).replace('.', ',')} $</td>
                                        <td> <button onClick={() => removeItem(i)}>X</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button onClick={handleConfirmOrder} className="hero__confirm-order">Підтвердити замовлення</button>
                        <button onClick={handleClearOrder} className="hero__confirm-order">Очистити замовлення</button>
                    </div>
                ) : (
                    <p>Корзина пуста</p>
                )}
            </Modal>
        </section>

    )
}

