import type { ActivityState } from "../reducers/activity-reducer";

type CaloriesTrackerProps = {
    state: ActivityState;
    };

export default function CaloriesTracker({ state }: CaloriesTrackerProps) {

    const counter = state.activities.reduce((acumulator, activity) => {
        // Food
        if (activity.category === 1 ) {
            acumulator[0] += Number(activity.calories);
            acumulator[2] += Number(activity.calories); // Total calories
        // Exercise
        } else if (activity.category === 2 ) {
            acumulator[1] += Number(activity.calories);
            acumulator[2] -= Number(activity.calories); // Total calories
        }
        return acumulator;
    }, [0, 0, 0]);

  return (
    <>
        <div>
            <h2 className="text-8xl font-bold text-white text-center"> {counter[0]} </h2>
            <h3 className="text-2xl text-white font-semibold text-center">Calorias Ganadas</h3>
        </div>
        <div>
            <h2 className="text-8xl font-bold text-white text-center"> {counter[1]} </h2>
            <h3 className="text-2xl text-white font-semibold text-center">Calorias Quemadas</h3>
        </div>
        <div>
            <h2 className="text-8xl font-bold text-white text-center"> {counter[2]} </h2>
            <h3 className="text-2xl text-white font-semibold text-center">Calorias Totales</h3>
        </div>
    </>
  )
}
