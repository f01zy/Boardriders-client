import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { FiMenu } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { Context } from '../main'
import { observer } from 'mobx-react-lite'

const Navigation = () => {
  const {store} = useContext(Context)
  const [menu, setMenu] = useState(false)
  const [auth, setAuth] = useState(false)
  const [authSelect, setAuthSelect] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>

    {auth == true && (
      <div className="auth">
        <div className="form">
          <button className="exit" onClick={e => setAuth(!auth)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M14 1.54634L12.59 0L7 6.13053L1.41 0L0 1.54634L5.59 7.67687L0 13.8074L1.41 15.3537L7 9.22321L12.59 15.3537L14 13.8074L8.41 7.67687L14 1.54634Z" fill="white"/>
          </svg>
          </button>
          <div className="row">
              <div className="links">
                {store.isAuth ? (
                  <ul>
                    <li onClick={e => store.logout()}>Выйти</li>
                  </ul>
                ) : (
                  <ul>
                    <li onClick={e => setAuthSelect("login")}>Вход</li>
                    <li onClick={e => setAuthSelect("register")}>Регистрация</li>
                  </ul>              
                )}
              </div>
            <div className={authSelect == "register" ? "col dis" : "col"}>
              <h2>Вход</h2>
              <div className="input">
                <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder='Номер телефона или email' />
              </div>
              <div className="input">
                <input type="text" onChange={e => setPassword(e.target.value)} value={password} placeholder='Пароль' />
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Запомнить меня</p>
              </div>
              <button className="login" onClick={e => store.login(email, password)}>Войти</button>
            </div>
            <div className={authSelect == "login" ? "col dis" : "col"}>
              <h2>Регистрация</h2>
              <div className="input">
                <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder='Номер телефона или email' />
              </div>
              <div className="input">
                <input type="text" onChange={e => setPassword(e.target.value)} value={password} placeholder='Пароль' />
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Запомнить меня</p>
              </div>
              <button className="register" onClick={e => store.register(email, password)}>Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </div>
    )}
    
    <nav className="desk">
      <nav className="top">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul>
                <li><Link to="/">Магазины</Link></li>
                <li><Link to="/">Помощь</Link></li>
                <li><Link to="/">Блоги</Link></li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li><Link to="/">Бесплатная доставка</Link></li>
                <li><Link to="/">Оплата при получении</Link></li>
                <li><Link to="/">Возврат в течении 14 дней</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bottom">
        <div className="container">
          <div className="top-info">
            <div className="select">
              <ul>
                <li><Link to="/catalog">Мужчинам</Link></li>
                <li><Link to="/catalog">Женщинам</Link></li>
                <li><Link to="/catalog">Детям</Link></li>
              </ul>
            </div>

            <div className="logo">
              <Link to="/"><img src={logo} /></Link>
            </div>

            <div className="links">
              <ul>
                <li><Link onClick={e => setAuth(!auth)}>Войти</Link></li>
                <li><Link to="/">Корзина</Link></li>
                <li><Link to="/">Поиск</Link></li>
              </ul>
            </div>
          </div>
          <div className="bottom-info">
            <ul>
              <li><Link to="/catalog">Новинки</Link></li>
              <li><Link to="/catalog">Сноуборд</Link></li>
              <li><Link to="/catalog">Лыжи</Link></li>
              <li><Link to="/catalog">Скейт</Link></li>
              <li><Link to="/catalog">Лонгборд</Link></li>
              <li><Link to="/catalog">Вейкборд</Link></li>
              <li><Link to="/catalog">Серф</Link></li>
              <li><Link to="/catalog">Sup</Link></li>
              <li><Link to="/catalog">Одежда</Link></li>
              <li><Link to="/catalog">Обувь</Link></li>
              <li><Link to="/catalog">Аксесуары</Link></li>
              <li><Link to="/catalog">Бренды</Link></li>
              <li><Link to="/catalog">Распродажа</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>

    <nav className="mobile">
      <div className="top">
        <div className="container">
          <ul>
            <li><FiMenu className='FiMenu' onClick={e => setMenu(!menu)} /></li>
            <li><BiSearch className='BiSearch' /></li>
          </ul>
          <Link to="/">
            <div className="logo">
              <img src={logo} />
            </div>
          </Link>
          <ul>
            <li><Link to="/"><AiFillStar className='AiFillStar' /></Link></li>
            <li><Link to="/"><FaShoppingCart className='FaShoppingCart' /></Link></li>
          </ul>
        </div>
      </div>
      {menu == true && (
        <div className="menu">
          <main>
            <div className="links">
              <ul>
                <li><Link to="/catalog">Новинки</Link></li>
                <li><Link to="/catalog">Сноуборд</Link></li>
                <li><Link to="/catalog">Лыжи</Link></li>
                <li><Link to="/catalog">Скейт</Link></li>
                <li><Link to="/catalog">Лонгборд</Link></li>
                <li><Link to="/catalog">Вейкборд</Link></li>
                <li><Link to="/catalog">Серф</Link></li>
                <li><Link to="/catalog">Sup</Link></li>
                <li><Link to="/catalog">Одежда</Link></li>
                <li><Link to="/catalog">Обувь</Link></li>
                <li><Link to="/catalog">Аксесуары</Link></li>
                <li><Link to="/catalog">Бренды</Link></li>
              </ul>
            </div>
            <div className="auth-nav">
              <h3>Личный кабинет</h3>
              {store.isAuth ? (
                <div className="buttons" align="center">
                  <button onClick={e => store.logout()}>Выход</button>
                </div>
              ) : (
                <div className="buttons" align="center">
                  <button onClick={e => setAuth(!auth)}>Войти</button>
                  <button onClick={e => setAuth(!auth)}>Зарегистрироваться</button>
                </div>
              )}
            </div>
            <div className="links-bottom" align="center">
              <ul>
                <li><Link to="/">Магазины</Link></li>
                <li><Link to="/">Помощь</Link></li>
                <li><Link to="/">Блоги</Link></li>
              </ul>
            </div>
          </main>
          <div className="black" onClick={e => setMenu(!menu)}>

          </div>
        </div>
      )}
    </nav>

    </>
  )
}

export default observer(Navigation)