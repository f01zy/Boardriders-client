import React from 'react'
import styles from "./Card.module.scss"
import card from "../../assets/images/cards/image-1.png"
import { Link, useParams } from 'react-router-dom'

const Card = () => {
  const params = useParams()

  return (
    <>
      <Link to={`/products/${params.product}`}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={card} />
          </div>
          {/* <div className={styles.discount}>
            <p>50%</p>
          </div> */}
          <div className={styles.text}>
          <h4>LIB TECH</h4>
            <p>Мужской сноуборд</p>
            <strong>34500 ₽</strong>
          </div>
        </div>
      </Link>

    </>
  )
}

export default Card