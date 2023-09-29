import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Catalog from "./pages/Catalog"
import Detail from "./pages/Detail"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/products/:product" element={<Detail />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
