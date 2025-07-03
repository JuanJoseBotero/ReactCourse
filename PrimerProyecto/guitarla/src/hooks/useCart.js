import { useMemo, useState, useEffect } from 'react';
import { db } from '../data/db';


export default function useCart() {

    const inicialCart = () => {
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
    }

    const [data, setData] = useState(db);
    const [cart, setCart] = useState(inicialCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    
    function addToCart(item){
        const existingItem = cart.find(guitar => guitar.id === item.id);

        if(existingItem){
            const updatedCart = cart.map(guitar => {
                if(guitar.id === item.id){
                    return {...guitar, quantity: guitar.quantity + 1};
                }
                return guitar;
            })
            setCart(updatedCart);
        }
        else{
            setCart( () => [...cart, {...item, quantity: 1}]);
        }
    }

    const cartIsEmpty = useMemo( () => cart.length === 0, [cart] )
    const totalToPay = useMemo( () => cart.reduce((total, item) => total + (item.price * item.quantity), 0), [cart] )

    const deleteItem = (guitar) => {
        setCart(prevCart => prevCart.filter(item => item.id !== guitar.id));
    }

    const increaseQuantity = (guitar) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if(item.id === guitar.id) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item;
            } )
        })
    }

    const decreaseQuantity = (guitar) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if(item.id === guitar.id){
                    if(item.quantity > 1){
                        return {...item, quantity: item.quantity - 1}
                    }
                    else {
                        return null
                    }
                }
                return item;
            })

            return updatedCart.filter(item => item !== null);
        })
    }

    const clearCart = () => {
        setCart([]);
    }

    return {
        data,
        cart,
        setCart,
        addToCart,
        cartIsEmpty,
        totalToPay,
        deleteItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart
    };
}