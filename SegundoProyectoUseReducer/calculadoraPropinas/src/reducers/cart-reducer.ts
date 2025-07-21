import type { MenuItem, OrderItem} from '../types/index';

type CartAction = 
{ type: 'ADD_TO_CART', payload: { addItem: MenuItem } } |
{ type: 'REMOVE_FROM_CART', payload: { removeItem: OrderItem } } |
{ type: 'CLEAR_CART' } |
{ type: 'SET_TIP', payload: { tip: number } };

type CartState = {
    items: OrderItem[]
    tip: number
}

export const initialState: CartState = {
    items: [],
    tip: 0
};

export function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const itemExists = state.items.find(item => item.id === action.payload.addItem.id);
            if (itemExists){
                return {
                    ...state,
                    items: state.items.map(item => {
                        if (item.id === action.payload.addItem.id) {
                            return { ...item, quantity: item.quantity + 1 };
                        }
                        return item;
                    })
                }
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload.addItem, quantity: 1 }]
            };
        }

        case 'REMOVE_FROM_CART': {
            const updatedItems = state.items.filter(item => item.id !== action.payload.removeItem.id);
            return {
                ...state,
                items: updatedItems
            };
        }

        case 'CLEAR_CART': {
            return initialState;
        }

        case 'SET_TIP': {
            return {
                ...state,
                tip: action.payload.tip
            };
        }

        default:
            return state;
    }
}