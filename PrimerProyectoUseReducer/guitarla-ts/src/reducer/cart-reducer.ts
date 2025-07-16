import type { CartItem, Guitar } from "../interfaces";
import { db } from "../data/db";

export type ActionsCartReducer = 
{ type: 'ADD_TO_CART'; payload: { newItem : Guitar} } |
{ type: 'DELETE_ITEM'; payload: { deleteItem: Guitar } } |
{ type: 'INCREASE_QUANTITY'; payload: { increaseItem: Guitar } } |
{ type: 'DECREASE_QUANTITY'; payload: { decreaseItem: Guitar } } |
{ type: 'CLEAR_CART' };

export type StateCartReducer = {
    guitars: CartItem[];
    data: Guitar[];
}

export type CartReducer = {
    state: StateCartReducer;
    actions: ActionsCartReducer;
}


let guitarsFromStorage: CartItem[];
try {
  guitarsFromStorage = JSON.parse(localStorage.getItem('cart') || '[]');
} catch (error) {
  guitarsFromStorage = [];
}

export const initialState: StateCartReducer = {
    guitars: guitarsFromStorage,
    data: db
};

export function cartReducer(state: StateCartReducer = initialState, actions:ActionsCartReducer): StateCartReducer {
    switch (actions.type){
        case 'ADD_TO_CART': {
            const existingItem = state.guitars.find(guitar => guitar.id === actions.payload.newItem.id);

            if(existingItem){
                const updatedCart = state.guitars.map(guitar => {
                    if(guitar.id === actions.payload.newItem.id){
                        return {
                            ...guitar, 
                            quantity: guitar.quantity + 1

                        };
                    }
                    return guitar;
                })
                return {
                    ...state,
                    guitars: updatedCart
                };
            }
            else{
                return {
                    ...state,
                    guitars: [...state.guitars, {...actions.payload.newItem, quantity: 1}]
                };
            }
        }
        
        case 'DELETE_ITEM': {
            const uptadedCart = state.guitars.filter(guitar => guitar.id !== actions.payload.deleteItem.id);
            return {
                ...state,
                guitars: uptadedCart
            };
        }

        case 'INCREASE_QUANTITY': {
            const updatedCart = state.guitars.map(guitar => {
                if(guitar.id === actions.payload.increaseItem.id){
                    return {
                        ...guitar,
                        quantity: guitar.quantity + 1
                    };
                }
                return guitar;
            })
            return {
                ...state,
                guitars: updatedCart
            };
        }

        case 'DECREASE_QUANTITY': {
            const updatedCart = state.guitars.map(guitar => {
                if(guitar.id === actions.payload.decreaseItem.id){
                    if(guitar.quantity > 1){
                        return {
                            ...guitar,
                            quantity: guitar.quantity - 1
                        };
                    }
                    else {
                        return null;
                    }
                }
                return guitar;
            })

            return {
                ...state,
                guitars: updatedCart.filter(guitar => guitar !== null)
            };
        }

        case 'CLEAR_CART': {
            return {
                ...state,
                guitars: []
            };
        }
        
        default: 
            return state
    }
}