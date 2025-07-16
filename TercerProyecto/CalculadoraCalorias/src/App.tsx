import Form from "./components/Form"
import { useReducer, useEffect, useRef } from "react"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ShowActivity from "./components/ShowActivity"
import CaloriesTracker from "./components/CaloriesTracker" 


function App() {

  const seccionRef = useRef<HTMLElement | null>(null);

  const scrollASeccion = (): void => {
    seccionRef.current?.scrollIntoView({ behavior: 'smooth', block: "center" });
  };


  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="mx-auto max-w-4xl flex justify-between items-center">
          <h1 className="uppercase text-xl text-white text-center font-bold ">Contador De Calorias</h1>
          <button className="px-4 py-2 uppercase bg-gray-500 hover:bg-gray-600 text-white font-bold cursor-pointer rounded-lg" onClick={() => dispatch({type:'deleteAllActivities'})} >Reiniciar App</button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="mx-auto max-w-4xl">
          <Form
            dispatch={dispatch}
            state={state}
            seccionRef={seccionRef}
          />
        </div>
      </section>

      <section className="bg-gray-800 py-10">
        <h2 className="text-2xl text-white font-bold uppercase text-center mb-4">Contador de Calorias</h2>
        <div className="mx-auto max-w-4xl flex justify-between items-center">
          <CaloriesTracker 
          state={state}
          />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>
        {state.activities.length === 0? <p className="text-center p-2 text-lg"> No hay actividades... </p> : null }
        {state.activities.map((activity) => (
          <ShowActivity
            key={activity.id}
            activity={activity}
            dispatch={dispatch}
            scrollASeccion={scrollASeccion}
          />
        ))}

      </section>
    </>
  )
}

export default App
