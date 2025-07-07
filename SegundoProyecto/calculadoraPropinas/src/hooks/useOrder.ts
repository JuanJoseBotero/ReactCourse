import { useState } from "react";
import type { OrderItem, MenuItem} from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addToOrder = (item: MenuItem) => {
        // Check if the item already exists in the order
        const itemExists = order.find(orderItem => orderItem.id === item.id);

        if (itemExists) {
            // If the item already exists in the order, increment its quantity
            const uptatedOrder = order.map(orderItem => {
                if (orderItem.id === item.id) {
                    return { ...orderItem, quantity: orderItem.quantity + 1 }
                }
                return orderItem;
            })
            setOrder(uptatedOrder);
        }
        else {
            // If the item does not exist in the order, add it with quantity 1
            const newItem: OrderItem = { ...item, quantity: 1} 
            setOrder([...order, newItem]);
        }
    }

    const removeFromOrder = (itemId : MenuItem['id']) => {
        // Filter out the item with the given id
        // and update the order state
        setOrder(order.filter(orderItem => orderItem.id !== itemId));
    }

    const emptyOrder = () => {
        // Reset the order state to an empty array
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        tip,
        setTip,
        addToOrder,
        removeFromOrder,
        emptyOrder,
    }
}