import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import Navigation from '../components/Navigation'
import Card from '../components/Card'
import slider from '../assets/images/home/home-image-1.png'
import stock_cards from '../assets/images/home/home-image-2.png'
import image1 from "../assets/images/home/image-14.png"
import image2 from "../assets/images/home/image-15.png"
import image3 from "../assets/images/home/image-16.png"
import image4 from "../assets/images/home/image-17.png"
import image5 from "../assets/images/home/image-18.png"
import image6 from "../assets/images/home/image-19.png"
import image7 from "../assets/images/home/image-20.png"
import stock1 from "../assets/images/stocks/image-1.png"
import stock2 from "../assets/images/stocks/image-2.png"
import Footer from '../components/Footer'
import { Context } from '../main'

const Home = () => {
  const {store} = useContext(Context)

  return (
    <>
    
    <Navigation />

    <div className="home">
      <div className="container">
        <div className="slider">
          <img src={slider} />
        </div>
        <div className="images">
          <div className="image">
            <img src={image1} />
          </div>
          <div className="image">
            <img src={image2} />
          </div>
          <div className="image">
            <img src={image3} />
          </div>
          <div className="image">
            <img src={image4} />
          </div>
          <div className="image">
            <img src={image5} />
          </div>
          <div className="image">
            <img src={image6} />
          </div>
          <div className="image">
            <img src={image7} />
          </div>
        </div>
        <div className="stocks">
          <div className="image">
            <img src={stock1} />
          </div>
          <div className="image">
            <img src={stock2} />
          </div>
        </div>
        <div className="cards-menu">
          <h1>Новинки</h1>
          <div className="cards">
            {store.isLoaded && (
              store.cards.map((item, index) => (
                index <= 4 && (
                  <div className="card" key={index}>
                    <Card title={item.title} price={item.price} />
                  </div>
                )
              ))
            )}
          </div>
          <div className="btn" align="center">
            <button>Показать больше</button>
          </div>
        </div>
        <div className="stock">
          <div className="image">
            <img src={stock_cards} />
          </div>
          <div className="text" align="center">
            <h2>Название акции</h2>
            <p>Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих<br />устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность<br />этого перса в истории, являет собою противоположность как раз этому.</p>
          </div>
        </div>
        <div className="cards-menu">
          <h1>DC Shoes популярное в коллекции</h1>
          <div className="cards">
            {store.isLoaded && (
              store.cards.map((item, index) => (
                index <= 4 && (
                  <div className="card" key={index}>
                    <Card title={item.title} price={item.price} />
                  </div>
                )
              ))
            )}
          </div>
          <div className="btn" align="center">
            <button>Показать больше</button>
          </div>
        </div>
      </div>
    </div>

    <Footer />

    </>
  )
}

export default observer(Home)