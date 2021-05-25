import React from 'react'
import styles from './card.module.css';

const Card = ({item, index}) => {

    return (
        <li className={styles.list}>
            <div className={styles.block}>
                <div>
                    <img src={item.img} alt="car"/>
                </div>
                <div className={styles.specifications}>
                    <h1> {item.brand.toUpperCase()} </h1>
                    <h2> {item.model}</h2>
                    <p> BodyType: {item.bodyType} </p>
                    <p> Fuel: {item.fuel} </p>
                    <p> HorsePower: {item.horsepower}</p>
                    <p> Transmission: {item.transmission} </p>
                </div>
                <div className={styles.prices} >
                    <h1> {item.price} RUB </h1>
                    <p> {item.year} year </p>
                </div>
            </div>
        </li>
    )
}

export default Card;