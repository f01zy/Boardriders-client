import React from 'react'
import card from "../assets/images/cards/image-2.png"
import logo from "../assets/images/detail/logo-detail.png"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Card from '../components/Card'

const Detail = () => {
  return (
    <>
      <Navigation />

      <div className="detail">
        <div className="container">
          <main className='detail-card'>
            <div className="row">
              <div className="col">
                <div className="left">
                  <div className="img">
                    <img src={card} />
                  </div>
                  <div className="img">
                    <img src={card} />
                  </div>
                  <div className="img">
                    <img src={card} />
                  </div>
                  <div className="img">
                    <img src={card} />
                  </div>
                  <div className="img">
                    <img src={card} />
                  </div>
                </div>

                <div className="image">
                  <img src={card} />
                </div>
              </div>
              <div className="col">
                <p>Артикул производителя: 19SN003</p>
                <div className="stars">
                  <img src={logo} />
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 16.0737L16.18 20L14.54 12.6L20 7.62105L12.81 6.96842L10 0L7.19 6.96842L0 7.62105L5.45 12.6L3.82 20L10 16.0737Z" fill="#EB5757"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 16.0737L16.18 20L14.54 12.6L20 7.62105L12.81 6.96842L10 0L7.19 6.96842L0 7.62105L5.45 12.6L3.82 20L10 16.0737Z" fill="#EB5757"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 16.0737L16.18 20L14.54 12.6L20 7.62105L12.81 6.96842L10 0L7.19 6.96842L0 7.62105L5.45 12.6L3.82 20L10 16.0737Z" fill="#EB5757"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 16.0737L16.18 20L14.54 12.6L20 7.62105L12.81 6.96842L10 0L7.19 6.96842L0 7.62105L5.45 12.6L3.82 20L10 16.0737Z" fill="#EB5757"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10.2681 15.6517L10 15.4813L9.73187 15.6517L4.56701 18.933L5.93829 12.7076L6.0004 12.4256L5.78724 12.2309L1.1742 8.01653L7.2352 7.46637L7.53946 7.43876L7.65372 7.15541L10 1.33695L12.3463 7.15541L12.4605 7.43876L12.7648 7.46637L18.8244 8.0164L14.2031 12.2305L13.9892 12.4256L14.0518 12.7082L15.4311 18.9319L10.2681 15.6517Z" stroke="black"/>
                    </svg>
                  </div>
                  <p>24 отзыва</p>
                </div>
                <div className="title">
                  <h2>Сноуборд GNU Asym Carbon Credit Btx<br />Multicolor</h2>
                  <h2>59 395 ₽</h2>
                </div>
                <div className="colors">
                  <p>Цвет: цветной</p>
                  <div className="cards">
                    <img src={card} />
                    <img src={card} />
                    <img src={card} />
                    <img src={card} />
                  </div>
                </div>
                <div className="size">
                  <p>Таблица размеров</p>
                  <div className="btns">
                    <button>32.5</button>
                    <button>155</button>
                    <button disabled>32.5</button>
                    <button>32.5</button>
                    <button>15</button>
                    <button>34</button>
                    <button>23.5</button>
                  </div>
                </div>
                <div className="buttons">
                  <div className="button">
                    <button>Добавить в корзину</button>
                  </div>
                  <div className="button">
                    <button>Забрать в магазине</button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="bottom">
            <div className="description">
              <h2>Характеристики</h2>
              <p>The Old Skool has never been lacking in attitude. It brought the dawn of the classic Vans side stripe that has developed into a status symbol of tradition and skate stature. Aside from all that personality, they have lasted as long as they have because of their ability to perform on a skateboard, and to last, and last. Though they now share the ranks with many new Vans styles with their own innovations, the Old Skools aren't going anywhere.</p>
            </div>
            <div className="stats">
              <ul>
                <li>Вес: 540 грамм</li>
                <li>Touring</li>
                <li>8</li>
                <li>Вес: 540 грамм</li>
                <li>Вес: 540 грамм</li>
              </ul>
              <ul>
                <li>Вес: 540 грамм</li>
                <li>Touring</li>
                <li>8</li>
                <li>Вес: 540 грамм</li>
                <li>Вес: 540 грамм</li>
              </ul>
            </div>
          </div>
          <div className="items">
            <div className="item">
              <h2>С этим товарам смотрят</h2>
              <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <Footer />
    </>
  )
}

export default Detail