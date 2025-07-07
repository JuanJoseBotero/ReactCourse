import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types"
import { useMemo } from "react";

type OrderItemProps = {
    order: OrderItem[];
    percentageTip: number;
    emptyOrder: () => void;
}

export default function OrderTotal({ order, percentageTip, emptyOrder}: OrderItemProps) {

    const subtotal = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order]);
    const tip = useMemo(() => subtotal * percentageTip, [percentageTip, order]) // Placeholder for tip calculation logic
    const total = useMemo(() => subtotal + tip, [subtotal, tip]);

  return (
    <>
        <div className="space-y-3">
            <h2 className="text-2xl font-black">Totales y Propinas</h2>
            <p>Subtotal a pagar: <span className="font-black"> {formatCurrency(subtotal)} </span></p>
            <p>Propina: <span className="font-black"> {formatCurrency(tip)} </span></p>
            <p>Total a pagar: <span className="font-black "> {formatCurrency(total)} </span></p>
        </div>
        <button className="w-full bg-black text-white font-bold p-3 uppercase disabled:bg-slate-200" onClick={emptyOrder} disabled={subtotal === 0}> Vaciar Orden</button>
    </>
  )
}
