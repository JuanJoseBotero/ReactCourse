import { useMemo, useState, useEffect } from 'react';
import { db } from '../data/db';
import type { Guitar, CartItem } from '../interfaces';


export default function useCart() {

    const inicialCart = () : CartItem[] =>{
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
    }

    const [data] = useState(db);
    const [cart, setCart] = useState(inicialCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    
    function addToCart(item : Guitar) {
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

    const deleteItem = (guitar : Guitar) => {
        setCart(prevCart => prevCart.filter(item => item.id !== guitar.id));
    }

    const increaseQuantity = (guitar : Guitar) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if(item.id === guitar.id) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item;
            } )
        })
    }

    const decreaseQuantity = (guitar: Guitar) => {
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
        addToCart,
        cartIsEmpty,
        totalToPay,
        deleteItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart
    };
}