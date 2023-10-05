import React, { useContext } from 'react'
import { Context } from '../main'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import card from '../assets/images/profile/card.png'
import Card from '../components/Card'

const Profile = () => {
  const {store} = useContext(Context)

  if(!store.isAuth) {
    window.location.href = "/"
  }

  return (
    <>
    <Navigation />    

    <div className="profile">
      <div className="container">
        <h1 className='main-text'>Мой аккаунт</h1>
        <div className="profile-links">
          <div className="button">
            <button>Главная</button>
          </div>
          <div className="button">
            <button>Мои заказы</button>
          </div>
          <div className="button">
            <button>Бонусный счет</button>
          </div>
          <div className="button">
            <button>Личная информация</button>
          </div>
          <div className="button">
            <button>Мои адреса</button>
          </div>
          <div className="button">
            <button>Подписка на новости</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="basket">
              <div className="text">
                <h3>Корзина</h3>
                <p>(10 товаров)</p>
                <p>Перейти в корзину</p>
              </div>
              <div className="content">
                <ul>
                  <li><Link to="/">Сноуборд GNU Asym Carbon Credit Btx Multicolor</Link></li>
                  <li><Link to="/">Утепленные кроссовки DC SHOES E.Tribeka WNT</Link></li>
                  <li><Link to="/">Шлем DC SHOES E.Tribeka WNT</Link></li>
                  <li><Link to="/">Ботинки сноубордические DC Shoes</Link></li>
                  <li><Link to="/">Утепленные кроссовки DC SHOES E.Tribeka WNT</Link></li>
                </ul>
                <p>И еще 9 товаров на общую сумму: <span>170500 ₽</span></p>
              </div>
            </div>

            <div className="orders">
              <div className="text">
                <h3>Заказы</h3>
                <p>Все заказы</p>
              </div>
              <div className="content">
                <div className="orders_list">
                  <div className="order">
                    <div className="left">
                      <h4>195455-222546-ANU</h4>
                      <div className="status">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                          <path d="M11 5.29412C11 2.37353 8.53417 0 5.5 0C2.46583 0 0 2.37353 0 5.29412C0 9.26471 5.5 15 5.5 15C5.5 15 11 9.26471 11 5.29412ZM3.66667 5.29412C3.66667 4.32353 4.49167 3.52941 5.5 3.52941C6.50833 3.52941 7.33333 4.32353 7.33333 5.29412C7.33333 5.76215 7.14018 6.21101 6.79636 6.54195C6.45255 6.8729 5.98623 7.05882 5.5 7.05882C5.01377 7.05882 4.54745 6.8729 4.20364 6.54195C3.85982 6.21101 3.66667 5.76215 3.66667 5.29412Z" fill="#EA5656"/>
                        </svg>
                        <p>Заказ передан в службу доставки</p>
                      </div>
                    </div>
                    <div className="pay_status">
                      <h4>45258 ₽</h4>
                      <p>оплачен</p>
                    </div>
                  </div>
                  <div className="order">
                    <div className="left">
                      <h4>195455-222546-ANU</h4>
                      <div className="status">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                          <path d="M11 5.29412C11 2.37353 8.53417 0 5.5 0C2.46583 0 0 2.37353 0 5.29412C0 9.26471 5.5 15 5.5 15C5.5 15 11 9.26471 11 5.29412ZM3.66667 5.29412C3.66667 4.32353 4.49167 3.52941 5.5 3.52941C6.50833 3.52941 7.33333 4.32353 7.33333 5.29412C7.33333 5.76215 7.14018 6.21101 6.79636 6.54195C6.45255 6.8729 5.98623 7.05882 5.5 7.05882C5.01377 7.05882 4.54745 6.8729 4.20364 6.54195C3.85982 6.21101 3.66667 5.76215 3.66667 5.29412Z" fill="#828B8D"/>
                        </svg>
                        <p>Отменен</p>
                      </div>
                    </div>
                    <div className="pay_status">
                      <h4>45258 ₽</h4>
                      <p>оплачен</p>
                    </div>
                  </div>
                  <div className="order">
                    <div className="left">
                      <h4>195455-222546-ANU</h4>
                      <div className="status">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                          <path d="M11 5.29412C11 2.37353 8.53417 0 5.5 0C2.46583 0 0 2.37353 0 5.29412C0 9.26471 5.5 15 5.5 15C5.5 15 11 9.26471 11 5.29412ZM3.66667 5.29412C3.66667 4.32353 4.49167 3.52941 5.5 3.52941C6.50833 3.52941 7.33333 4.32353 7.33333 5.29412C7.33333 5.76215 7.14018 6.21101 6.79636 6.54195C6.45255 6.8729 5.98623 7.05882 5.5 7.05882C5.01377 7.05882 4.54745 6.8729 4.20364 6.54195C3.85982 6.21101 3.66667 5.76215 3.66667 5.29412Z" fill="black"/>
                        </svg>
                        <p>Возврат</p>
                      </div>
                    </div>
                    <div className="pay_status">
                      <h4>45258 ₽</h4>
                      <p>оплачен</p>
                    </div>
                  </div>
                  <div className="order">
                    <div className="left">
                      <h4>195455-222546-ANU</h4>
                      <div className="status">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                          <path d="M11 5.29412C11 2.37353 8.53417 0 5.5 0C2.46583 0 0 2.37353 0 5.29412C0 9.26471 5.5 15 5.5 15C5.5 15 11 9.26471 11 5.29412ZM3.66667 5.29412C3.66667 4.32353 4.49167 3.52941 5.5 3.52941C6.50833 3.52941 7.33333 4.32353 7.33333 5.29412C7.33333 5.76215 7.14018 6.21101 6.79636 6.54195C6.45255 6.8729 5.98623 7.05882 5.5 7.05882C5.01377 7.05882 4.54745 6.8729 4.20364 6.54195C3.85982 6.21101 3.66667 5.76215 3.66667 5.29412Z" fill="#EA5656"/>
                        </svg>
                        <p>Заказ передан в службу доставки</p>
                      </div>
                    </div>
                    <div className="pay_status">
                      <h4>45258 ₽</h4>
                      <p>оплачен</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="bonus_account">
              <div className="text">
                <h3>Бонусный счет</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 12.8125C3.79063 12.8125 1.1875 10.2094 1.1875 7C1.1875 3.79063 3.79063 1.1875 7 1.1875C10.2094 1.1875 12.8125 3.79063 12.8125 7C12.8125 10.2094 10.2094 12.8125 7 12.8125Z" fill="#828B8D"/>
                  <path d="M8.74375 3.94844C8.275 3.5375 7.65625 3.3125 7 3.3125C6.34375 3.3125 5.725 3.53906 5.25625 3.94844C4.76875 4.375 4.5 4.94844 4.5 5.5625V5.68125C4.5 5.75 4.55625 5.80625 4.625 5.80625H5.375C5.44375 5.80625 5.5 5.75 5.5 5.68125V5.5625C5.5 4.87344 6.17344 4.3125 7 4.3125C7.82656 4.3125 8.5 4.87344 8.5 5.5625C8.5 6.04844 8.15625 6.49375 7.62344 6.69844C7.29219 6.825 7.01094 7.04687 6.80937 7.3375C6.60469 7.63437 6.49844 7.99062 6.49844 8.35156V8.6875C6.49844 8.75625 6.55469 8.8125 6.62344 8.8125H7.37344C7.44219 8.8125 7.49844 8.75625 7.49844 8.6875V8.33281C7.49925 8.18113 7.54574 8.03321 7.63187 7.90834C7.71799 7.78347 7.83975 7.68746 7.98125 7.63281C8.90312 7.27813 9.49844 6.46563 9.49844 5.5625C9.5 4.94844 9.23125 4.375 8.74375 3.94844ZM6.375 10.4375C6.375 10.6033 6.44085 10.7622 6.55806 10.8794C6.67527 10.9967 6.83424 11.0625 7 11.0625C7.16576 11.0625 7.32473 10.9967 7.44194 10.8794C7.55915 10.7622 7.625 10.6033 7.625 10.4375C7.625 10.2717 7.55915 10.1128 7.44194 9.99556C7.32473 9.87835 7.16576 9.8125 7 9.8125C6.83424 9.8125 6.67527 9.87835 6.55806 9.99556C6.44085 10.1128 6.375 10.2717 6.375 10.4375Z" fill="#828B8D"/>
                </svg>
                <p>Отвязать карту</p>
              </div>
              <div className="content">
                <div className="bonus_account_row">
                  <div className="bonus_account_col">
                    <p><span>Вам доступно для погашения</span><br />30% от стоимости заказа</p>
                  </div>
                  <div className="bonus_account_col">
                    <img src={card} />
                  </div>
                </div>
                <div className="scores">
                  <h1>14 099</h1>
                  <p>баллов на вашем счету</p>
                </div>
                <div className="progress_bar"></div>
                <p className='bottom-text'>900 рублей осталось чтобы стать обладателем серебряного статуса</p>
              </div>
            </div>
            
            <div className="info">
              <div className="text">
                <h3>Личная информация</h3>
                <p>Редактировать</p>
              </div>
              <div className="content">
                <div className="row_info">
                  <div className="col_info">
                    <ul>
                      <li>Аминов Али</li>
                      <li>мужчина</li>
                      <li>02.02.2010</li>
                      <li>+7 (903) 428 21 83</li>
                      <li>f0lz0@yandex.ru</li>
                    </ul>
                  </div>
                  <div className="col_info">
                    <p>Пароль: ******</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default Profile