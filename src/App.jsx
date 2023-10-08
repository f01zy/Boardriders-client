import { Route, Routes, BrowserRouter } from "react-router-dom"
import { observer } from 'mobx-react-lite'
import Home from "./pages/Home"
import Error from "./pages/Error"
import Catalog from "./pages/Catalog"
import Detail from "./pages/Detail"
import { useContext, useEffect } from "react"
import { Context } from "./main"
import Profile from "./pages/Profile"
import Create from "./pages/Create"

function App() {
  const {store} = useContext(Context)

  useEffect(() => {
    if(localStorage.getItem("token")) {
      store.checkAuth()
    }
    store.get()
  }, [])

  if(!store.isLoaded) {
    return <h1>Загрузка</h1>
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/products/:product" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default observer(App)
