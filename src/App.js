import React, {useState} from 'react'
import { BrowserRouter, Route, Routes, useNavigate  } from 'react-router-dom';
import './App.css';
import Header from "./components/header"
import Menu from "./components/menu"
import MenuFilter from "./components/menu-filter"
import Cart from "./components/cart"

const mongodb = [
  {Name: 'Dosa', Quantity: 0, Cost: 40, Type: 'Breakfast', BufferQ: 8, CurrOrders: 23, PrepTime: 3},
  {Name: 'Idly', Quantity: 0, Cost: 30, Type: 'Breakfast', BufferQ: 6, CurrOrders: 20, PrepTime: 3},
  {Name: 'Paratha', Quantity: 0, Cost: 50, Type: 'Breakfast',  BufferQ: 1, CurrOrders: 0, PrepTime: 3},
  {Name: 'Chole Bature', Quantity: 0, Cost: 50, Type: 'Breakfast', BufferQ: 2, CurrOrders: 8, PrepTime: 3},
  {Name: 'Maggie', Quantity: 0, Cost: 50, Type: 'Beverages', BufferQ: 4, CurrOrders: 0, PrepTime: 2},
  {Name: 'Maggie', Quantity: 0, Cost: 50, Type: 'Lunch', BufferQ: 4, CurrOrders: 0, PrepTime: 2},
  {Name: 'Dosa', Quantity: 0, Cost: 40, Type: 'Snacks', BufferQ: 8, CurrOrders: 23, PrepTime: 3},
  {Name: 'Idly', Quantity: 0, Cost: 30, Type: 'Bakery', BufferQ: 6, CurrOrders: 20, PrepTime: 3},
]

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [user, setUser] = useState("Username")
  const [menu, setMenu] = useState(mongodb)
  const [filter, setFilter] = useState("Everything")

  const settFilter = (types) => {
    setFilter(types)
  }
  
  const addItem = (Name) => {
    setMenu(menu.map((value) => {
      if(value.Name === Name && value.Quantity < 10){
        setCartCount(cartCount + 1)
        return {...value, Quantity: value.Quantity + 1}
      }
      else  
        return value
    }))
  }

  const remItem = (Name) => {
    setMenu(menu.map((value) => {
      if(value.Name === Name && value.Quantity > 0){
        setCartCount(cartCount - 1)
        return {...value, Quantity: value.Quantity - 1}
      }
      else  
        return value
    }))
  }

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} user={user} setFilter={setFilter} />
      <Routes>
        <Route exact index path='/' element={<Menu menu={menu} addItem={addItem} remItem={remItem} />} ></Route>
        <Route exact path='/filter' element={<MenuFilter menu={menu} filter={filter} addItem={addItem} remItem={remItem} />} ></Route>
        <Route exact path='/cart' element={<Cart menu={menu} cartCount={cartCount} addItem={addItem} remItem={remItem} />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
