import { menuItems } from "./data/db"
import  MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import useOrder from "./hooks/useOrder";
import TipSelector from "./components/TipSelector";
import type { OrderItem } from "./types";

function App() {

  const { order, tip, setTip, addToOrder, removeFromOrder, emptyOrder} = useOrder();

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
                <MenuItem
                  key={item.id}
                  item={item}
                  addToOrder={addToOrder}
                />
              ))}
            </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-7">
          <h2 className="text-4xl font-black ">Pedido</h2>
          <div className="">
          {order.length === 0 ? (
            <h2 className="text-center font-semibold">La Orden esta vacia</h2> 
          ) : ( 
            order.map( (item: OrderItem ) => (
            <OrderContents
              key={item.id}
              orderItem={item}
              removeFromOrder={removeFromOrder}
            />
            ))
          )}
          </div>
          <TipSelector 
            setTip={setTip}
            tip={tip}
          />
          <OrderTotal
            order={order}
            percentageTip={tip}
            emptyOrder={emptyOrder}
          />

        </div>
      </main>
    </>
  )
}

export default App
