import React, { useContext, useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Card from '../components/Card'
import img1 from '../assets/images/catalog/rectangle-58.png'
import img2 from '../assets/images/catalog/rectangle-65.png'
import img3 from '../assets/images/catalog/rectangle-84.png'
import { Context } from '../main'


const Catalog = () => {
  const {store} = useContext(Context)
  const [filterMenu, setFilterMenu] = useState(false)
  const [detailFilter, setDetailFilter] = useState("none")

  return (
    <>
    
    <Navigation />

    <div className="catalog">
      <div className="stocks">
        <div className="links">
          <ul>
            <li>Главная</li>
            <li>Мужчина</li>
            <li>Сноуборд</li>
          </ul>
        </div>
        <div className="cards">
          <div className="stock">
            <img src={img1} />
            <h3>Название акции</h3>
          </div>
          <div className="stock">
            <img src={img2} />
            <h3>Название акции</h3>
          </div>
          <div className="stock">
            <img src={img3} />
            <h3>Название акции</h3>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>Сноуборд</h1>
        <div className="content">
          <aside className="filters">
            <ul>
              <h3>Категории товаров</h3>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Сноуборды</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Крепления</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Обувь</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Наборы</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Куртки</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Штаны</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Шлемы</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Очки</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Перчатки</p>
              </div>
            </ul>
            <ul>
              <h3>Смотреть</h3>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Все товары</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Только со скидкой</p>
              </div>
            </ul>
            <ul>
              <h3>Бренд</h3>
              <input type="text" className='search-brand' placeholder='Поиск' />
              <div className="checkbox">
                <input type="checkbox" />
                <p>DC Shoes</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Quicksilver</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>BoardRiders</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Billabong</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Quicksilver</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>The Tree</p>
              </div>
            </ul>
            <ul>
              <h3>Размер</h3>
              <div className="checkbox">
                <input type="checkbox" />
                <p>One Size</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>XS</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>S</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>S/M</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>M</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>ML</p>
              </div>
            </ul>
            <ul>
              <h3>Технологии</h3>
              <div className="checkbox">
                <input type="checkbox" />
                <p>BOA</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Step On</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Est</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Magne Traction</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>The Channel</p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Recco</p>
              </div>
            </ul>
          </aside>
          <div className="mobile-filters">
            <div className="buttons">
              <button>Сортировать</button>
              <button onClick={e => setFilterMenu(!filterMenu)}>Фильтры</button>
            </div>
            {filterMenu == true && (
              <div className="filters-menu">
                <ul>
                  <h3>
                    Фильтры
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" onClick={e => setFilterMenu(!filterMenu)}>
                      <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
                    </svg>
                  </h3>
                  <li onClick={e => setDetailFilter("watch")}>Смотреть</li>
                  <li onClick={e => setDetailFilter("brand")}>Бренд</li>
                  <li onClick={e => setDetailFilter("technologies")}>Технологии</li>
                  <li>Цвет</li>
                  <li>Геометрия</li>
                  <li>Прогиб</li>
                  <li>Жесткость</li>
                  <li>Наличие</li>
                </ul>
              </div>
            )}
            {detailFilter == "watch" && (
              <div className="detail-filter">
                <h3>
                  <div className="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" onClick={e => setDetailFilter("none")}>
                      <path d="M18 9.81333L18 7.73625L3.63637 7.73625L8.84471 2.0243L7.50001 0.549577L6.37772e-06 8.77479L7.50001 17L8.84471 15.5253L3.63637 9.81332L18 9.81333Z" fill="black"/>
                    </svg>
                    Смотреть
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" onClick={e => {
                    setDetailFilter("none")
                    setFilterMenu("false")
                  }} className='right-svg'>
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
                  </svg>
                </h3>
                <div className="content">
                  <ul>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>Все товары</p>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>Только со скидкой</p>
                    </div>
                  </ul>
                </div>
              </div>
            )}
            {detailFilter == "brand" && (
              <div className="detail-filter">
                <h3>
                  <div className="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" onClick={e => setDetailFilter("none")}>
                      <path d="M18 9.81333L18 7.73625L3.63637 7.73625L8.84471 2.0243L7.50001 0.549577L6.37772e-06 8.77479L7.50001 17L8.84471 15.5253L3.63637 9.81332L18 9.81333Z" fill="black"/>
                    </svg>
                    Бренд
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" onClick={e => {
                    setDetailFilter("none")
                    setFilterMenu("false")
                  }} className='right-svg'>
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
                  </svg>
                </h3>
                <div className="content">
                  <ul>
                    <input type="text" className='search-brand' placeholder='Поиск' />
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>DC Shoes</p>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>Quicksilver</p>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>BoardRiders</p>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>Billabong</p>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>Quicksilver</p>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>The Tree</p>
                    </div>
                  </ul>
                </div>
              </div>
            )}
            {detailFilter == "technologies" && (
              <div className="detail-filter">
                <h3>
                  <div className="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" onClick={e => setDetailFilter("none")}>
                      <path d="M18 9.81333L18 7.73625L3.63637 7.73625L8.84471 2.0243L7.50001 0.549577L6.37772e-06 8.77479L7.50001 17L8.84471 15.5253L3.63637 9.81332L18 9.81333Z" fill="black"/>
                    </svg>
                    Технологии
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" onClick={e => {
                    setDetailFilter("none")
                    setFilterMenu("false")
                  }} className='right-svg'>
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
                  </svg>
                </h3>
                <div className="content">
                  <ul>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>BOA</p>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>Step On</p>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>Est</p>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>Magne Traction</p>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>The Channel</p>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" />
                      <p>Recco</p>
                    </div>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="products">
            {store.cards != undefined && (
              store.cards.map((item, index) => (
                <div className="card" key={index}>
                  <Card title={item.title} price={item.price} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>

    <Footer />
    
    </>
  )
}

export default Catalog