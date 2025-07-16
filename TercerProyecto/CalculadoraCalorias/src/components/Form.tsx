import { useState, useEffect} from "react"
import { v4 as UniqueIdCreator} from "uuid";
import { categories } from "../data/categories"
import type { Activity } from "../types/types"
import type { ActivityActions , ActivityState} from "../reducers/activity-reducer";




type FormProps = {
  dispatch: React.Dispatch<ActivityActions>;
  state: ActivityState;
  seccionRef: React.RefObject<HTMLElement | null>;
}

export default function Form( {dispatch, state, seccionRef} : FormProps ) {

  const initialStateActivity: Activity = {
    id: UniqueIdCreator(),
    category: 0,
    element: '',
    calories: ''
  };


  const [activity, setActivity] = useState<Activity>(initialStateActivity);

    useEffect(() => {
    // Reset the activity state when the component mounts or when the state changes
    const updatedActivity = state.activities.find(activity => activity.id === state.editActivityID);
    setActivity(updatedActivity || initialStateActivity);
  }, [state.editActivityID]);  


  const handleChange = (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    // If the input is a number, parse it to an integer
    const value = e.target.name === 'calories' || e.target.name === 'category' ? parseInt(e.target.value) : e.target.value;
    setActivity({
      ...activity,
      [e.target.name]: value
    });
  }

  const isValidForm = () => {
    return activity.category > 0 && activity.element.trim() !== '' && activity.calories !== '';
  }

  const submitValue = () => {
    if(activity.category === 0){
      return 'Selecciona una categoria';
    }
    else if(activity.category === 1){
      return 'Registrar Comida';
    }
    else if(activity.category === 2){
      return 'Registrar Ejercicio';
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({type: 'saveActivity', payload: {newActivity: activity}});

    // Reset the form
    setActivity(initialStateActivity); 
  }

  return (
    <form className="space-y-5 bg-white p-10 rounded-lg shadow-md" onSubmit={handleSubmit} ref={seccionRef}>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-medium">Categoria</label>
        <select name="category" id="category" className="border border-slate-300 p-2 rounded-lg w-full bg-white" value={activity.category} onChange={handleChange}>
          <option value="0" disabled>Selecciona una categoria</option>
            {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="element" className="font-medium">Actividad</label>
        <input name="element" type="text" id="element" className="border p-2 border-slate-300 rounded-lg w-full bg-white" placeholder="Ej. Comida, Jugo de Naranja, Carne de Cerdo, Ensalada, Pesas, Bicicleta" value={activity.element} onChange={handleChange}/>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-medium">Calorias</label>
        <input name="calories" type="number" id="calories" className="border p-2 border-slate-300 rounded-lg w-full bg-white" placeholder="Ej. 800, 1200, 300" min="0" value={activity.calories} onChange={handleChange}/>
      </div>

       <input 
        type="submit" 
        className="bg-slate-700 hover:bg-slate-900 w-full p-2 text-white uppercase font-bold cursor-pointe disabled:opacity-10" 
        disabled={!isValidForm()} 
        value={submitValue()}
      />
    </form>
  )
}
