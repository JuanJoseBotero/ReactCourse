import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types"

type OrderContentsProps = {
  orderItem: OrderItem;
  removeFromCart: (removeItem: OrderItem) => void;
}

export default function OrderContents({ orderItem, removeFromCart }: OrderContentsProps) {
  
  return (
    <div className="flex justify-between items-center border-t py-4 last-of-type:border-b">
      <div>
        <p> {orderItem.name} - {formatCurrency(orderItem.price)}</p>
        <p className="font-black">Cantidad: {orderItem.quantity} - {formatCurrency(orderItem.price * orderItem.quantity)} </p>
      </div>
      <button className="bg-red-600 text-white rounded-full w-8 h-8 font-bold" onClick={() => removeFromCart(orderItem)}> 
        X 
      </button>
    </div>
  )
}
