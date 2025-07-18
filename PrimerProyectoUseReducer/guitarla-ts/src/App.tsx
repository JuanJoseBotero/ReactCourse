import Header from './components/Header';
import Guitar from './components/Guitar';
import { useReducer, useEffect } from 'react';
import { cartReducer, initialState } from './reducer/cart-reducer';

function App() {

    const[cartState, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartState.guitars));
    }, [cartState.guitars]);

    return (
        <>

        <Header 
            cartState={cartState}
            dispatch={dispatch}
        />

        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {cartState.data.map((guitar) => (
                    <Guitar 
                        key={guitar.id}
                        guitar={guitar}  
                        dispatch={dispatch}
                    />
                ))}
            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>
        </>
    )
}

export default App


