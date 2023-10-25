import Navbar from "./Component/Navbar"
import City from "./pages/City"
import CartEmpty from "./pages/CartEmpty"
import SelectSits from "./pages/SelectSits"
import Cart from "./pages/Cart"
import {Route , Routes} from "react-router-dom"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/city" element={<City/>} />
        <Route path="/cartemty" element={<CartEmpty/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/next-component/:cityName" element={<SelectSits/>}/>
      </Routes>
    </div>
  )
}

export default App
