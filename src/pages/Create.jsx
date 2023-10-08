import React, { useContext, useState } from 'react'
import { Context } from '../main'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const Create = () => {
  const {store} = useContext(Context)
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [weight, setWeight] = useState("")
  const [description, setDescription] = useState("")

  return (
    <>

      <Navigation />
    
      <div className="create">
        <div className="form">
          <h2>Добавить товар</h2>
          <div className="input" align="center">
            <input type="text" placeholder='title' onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="input" align="center">
            <input type="text" placeholder='price' onChange={e => setPrice(e.target.value)} />
          </div>
          <div className="input" align="center">
            <input type="text" placeholder='weight' onChange={e => setWeight(e.target.value)} />
          </div>
          <div className="textarea" align="center">
            <textarea placeholder='description' onChange={e => setDescription(e.target.value)} ></textarea>
          </div>
          <div className="button" align="center">
            <button onClick={e => store.create(title, price, weight, description)}>Создать</button>
          </div>
        </div>
      </div>
    
      <Footer />

    </>
  )
}

export default Create