import { menuItems } from "./data/db"
import  MenuItems from "./components/MenuItems";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipSelector from "./components/TipSelector";
import type { MenuItem, OrderItem } from "./types";
import { useReducer } from "react";
import { cartReducer, initialState } from "./reducers/cart-reducer";

function App() {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (addItem: MenuItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: { addItem } });
  };

  const removeFromCart = (removeItem: OrderItem) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { removeItem } });
  };

  const emptyCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const setTip = (tip: number) => {
    dispatch({ type: 'SET_TIP', payload: { tip } });
  };

  return (
    <>
      <header className="bg-teal-400 py-5 ">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumos</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
            <div className="space-y-2 mt-8">
              {menuItems.map((item) => (
                <MenuItems
                  key={item.id}
                  item={item}
                  addToCart={addToCart}
                />
              ))}
            </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-7">
          <h2 className="text-4xl font-black ">Pedido</h2>
          <div className="">
          {state.items.length === 0 ? (
            <h2 className="text-center font-semibold">La Orden esta vacia</h2> 
          ) : ( 
            state.items.map( (item: OrderItem ) => (
            <OrderContents
              key={item.id}
              orderItem={item}
              removeFromCart={removeFromCart}
            />
            ))
          )}
          </div>
          <TipSelector 
            setTip={setTip}
            tip={state.tip}
          />
          <OrderTotal
            state={state.items}
            percentageTip={state.tip}
            emptyCart={emptyCart}
          />

        </div>
      </main>
    </>
  )
}

export default App
