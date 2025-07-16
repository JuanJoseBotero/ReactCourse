import type React from 'react';
import type { Guitar } from '../interfaces';
import type { ActionsCartReducer } from '../reducer/cart-reducer';

type GuitarProps = {
    guitar: Guitar;
    dispatch: React.Dispatch<ActionsCartReducer>
}

export default function Guitar({ guitar, dispatch} : GuitarProps) {

    const addToCart = (guitar: Guitar) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: { newItem: guitar }
        });
    }

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`./public/img/${guitar.image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{guitar.name}</h3>
                <p>{guitar.description}</p>
                <p className="fw-black text-primary fs-3">${guitar.price}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}