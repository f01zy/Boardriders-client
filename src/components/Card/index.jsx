import React from 'react'
import styles from "./Card.module.scss"
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (

    <>
      <Link to={`/products/${props.title}`}>
        <div className={styles.card}>
          <div className={styles.image} style={{backgroundImage: `url('http://localhost:5173/src/assets/images/cards/${props.title}.png')`}}>
            
          </div>
          {/* <div className={styles.discount}>
            <p>50%</p>
          </div> */}
          <div className={styles.text}>
          <h4>{props.title}</h4>
            <p>Мужской сноуборд</p>
            <strong>{props.price} ₽</strong>
          </div>
        </div>
      </Link>

    </>
  )
}

export default Card