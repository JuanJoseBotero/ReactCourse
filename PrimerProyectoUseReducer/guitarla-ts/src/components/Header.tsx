import type { CartItem } from "../interfaces"
import type { ActionsCartReducer, StateCartReducer } from "../reducer/cart-reducer"

type HeaderProps = {
    cartState: StateCartReducer;
    dispatch: React.Dispatch<ActionsCartReducer>
}

export default function Header( { cartState, dispatch } : HeaderProps) {

    const cartIsEmpty = cartState.guitars.length === 0;
    const totalToPay = cartState.guitars.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Function to handle deleting an item from the cart
    const deleteItem = (item: CartItem) => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: { deleteItem: item }
        });
    }

    // Function to clear the cart
    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART'
        });
    }

    // Functions to increase and decrease the quantity of items in the cart
    const increaseQuantity = (item: CartItem) => {
        dispatch({
            type: 'INCREASE_QUANTITY',
            payload: { increaseItem: item }
        });
    }

    // Function to decrease the quantity of items in the cart
    const decreaseQuantity = (item: CartItem) => {
        dispatch({
            type: 'DECREASE_QUANTITY',
            payload: { decreaseItem: item }
        });
    }
   
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div 
                            className="carrito"
                        >
                            <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                { cartIsEmpty ? 
                                (<p className="text-center">El carrito esta vacio</p>) : 
                                (<>
                                <table className="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartState.guitars.map(item => (
                                            <tr key={item.id}>
                                                <td>
                                                    <img className="img-fluid" src={`img/${item.image}.jpg`} alt="imagen guitarra" />
                                                </td>
                                                <td>{item.name} </td>
                                                <td className="fw-bold">
                                                        ${item.price}
                                                </td>
                                                <td className="flex align-items-start gap-4">
                                                    <button type="button" className="btn btn-dark" onClick={() => decreaseQuantity(item)} >
                                                        -
                                                    </button>
                                                        {item.quantity}
                                                    <button type="button" className="btn btn-dark" onClick={() => increaseQuantity(item)} >
                                                        +
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger"
                                                        type="button"
                                                        onClick={() => deleteItem(item)}
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-end">Total pagar: <span className="fw-bold">${totalToPay} </span></p>
                                <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart} >Vaciar Carrito</button>
                                </>
                                ) }
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>  
    )
}