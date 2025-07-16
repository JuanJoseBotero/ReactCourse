import { PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline"
import type { Activity } from "../types/types"
import { categories } from "../data/categories";
import type { ActivityActions } from "../reducers/activity-reducer";


type ShowActivityProps = {
    activity: Activity
    dispatch: React.Dispatch<ActivityActions>
    scrollASeccion: () => void;
}   

export default function ShowActivity({ activity , dispatch, scrollASeccion}: ShowActivityProps) {

    const categoryName = () => {
        // Find the category name based on the activity's category ID
        const category = categories.find(cat => cat.id === activity.category);
        return category ? category.name : 'Categoria Desconocida';
    }

  return (
    <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
        <div className="space-y-2 relative">
            <p className={`absolute -top-7 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? "bg-lime-500" :  "bg-blue-800" }`}> {categoryName()} </p>
            <p className="text-2xl font-bold pt-5"> {activity.element} </p>
            <p className="text-4xl text-lime-500 font-black"> {activity.calories} {' '} <span> Calorias </span></p>
        </div>
        <div className="flex items-center gap-2">
            <button className="cursor-pointer" onClick={() => {dispatch({type:'editActivity', payload:{editActivityID:activity.id}}); scrollASeccion();} } > <PencilSquareIcon className="size-8 text-gray-800"/> </button>
            <button className="cursor-pointer" onClick={() => dispatch({type:'deleteActivity', payload:{deleteActivityID:activity.id}})} > <TrashIcon className="size-8 text-red-600"/> </button>
        </div>
      
    </div>
  )
}
