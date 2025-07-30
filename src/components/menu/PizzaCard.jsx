import { useState } from 'react'
import './pizzaCard.scss'
import Modal from '../modal/Modal';
import GradientBtn from '../gradientBtn/GradientBtn';

import argentina from '../../assets/img/pizzaPhotos/argentina.png'
import gribnaya from '../../assets/img/pizzaPhotos/gribnaya.png'
import tomato from '../../assets/img/pizzaPhotos/tomato.png'
import italianx2 from '../../assets/img/pizzaPhotos/italianx2.png'
import italian from '../../assets/img/pizzaPhotos/italian.png'
import venecia from '../../assets/img/pizzaPhotos/venecia.png'
import meat from '../../assets/img/pizzaPhotos/meat.png'
import cheese from '../../assets/img/pizzaPhotos/cheese.png'

const images = {
  'argentina.png': argentina,
  'gribnaya.png': gribnaya,
  'tomato.png': tomato,
  'italianx2.png': italianx2,
  'italian.png': italian,
  'venecia.png': venecia,
  'meat.png': meat,
  'cheese.png': cheese
}

const PizzaCard = ({ product }) => {
  const [counter, setCount] = useState(1)
  const [selectedSize, setSelectedSize] = useState(product.size[0])
  const [showModal, setShowModal] = useState(false)

  function inc() {
    setCount(val => val + 1)
  }

  function dec() {
    if (counter > 1) {
      setCount(val => val - 1)
    }
  }

  let price = product.price

  if (selectedSize === 22) {
    price = +(product.price * 0.85).toFixed(2)
  } else if (selectedSize === 33) {
    price = +(product.price * 1.25).toFixed(2)
  }

  function addToBasket() {

    const newItem = {
      name: product.name,
      price: price,
      quantity: counter,
      size: selectedSize,
      type: product.type,
    }

    const order = JSON.parse(localStorage.getItem('order')) || []

    const existingIndex = order.findIndex(
      item => item.name === newItem.name && item.size === newItem.size
    )

    if (existingIndex !== -1) {
      order[existingIndex].quantity += newItem.quantity
    } else {
      order.push(newItem)
    }

    localStorage.setItem('order', JSON.stringify(order))
    setShowModal(true)
  }

  return (
    <div className="pizza-card" data-id={product.id} key={product.id}>
      <div className="pizza-card__content">

        <img src={images[product.urlImg]} alt={product.name} className="pizza-card__img" />
        <h3 className="pizza-card__name">{product.name}</h3>

        <p className="pizza-card__description">
          Наповнення: {product.ingredients.join(', ')}
        </p>

        <div className="pizza-card__sizes">
          {product.size.map((s, i) => (
            <button
              className={`pizza-card__size-btn ${selectedSize === s ? 'active' : ''}`}
              key={i}
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <button className="pizza-card__ingredients-btn">+ Інгрідієнти</button>

        <div className="pizza-card__order">
          <div className="pizza-card__price">
            {(price * counter).toFixed(2).replace('.', ',')}<span className="pizza-card__currency">$</span>
          </div>
          <div className="pizza-card__counter">
            <button className="pizza-card__decrease" onClick={dec}>−</button>
            <span className="pizza-card__quantity">{counter}</span>
            <button className="pizza-card__increase" onClick={inc}>+</button>
          </div>
        </div>

        <GradientBtn onClick={addToBasket}>+ До замовллення</GradientBtn>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} className="pizza-card">
        <p className="pizza-card__modal-text">Замовлення додано!</p>
      </Modal>
    </div>
  )
}

export default PizzaCard