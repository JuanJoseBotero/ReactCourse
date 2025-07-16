import type { Activity } from "../types/types"

export type ActivityActions = 
{ type: 'saveActivity', payload: {newActivity: Activity} } |
{ type: 'editActivity', payload: {editActivityID: Activity['id']} } |
{ type: 'deleteActivity', payload: {deleteActivityID: Activity['id'] } } |
{ type: 'deleteAllActivities'};

export type ActivityState = {
    activities: Activity[];
    editActivityID: Activity['id'];
    deleteActivityID: Activity['id'];
    }

export const initialState: ActivityState = {
    activities: JSON.parse(localStorage.getItem('activities') || '[]'),
    editActivityID: '',
    deleteActivityID: '',
}

export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
    switch (action.type) {
        case 'saveActivity':
            console.log('Se guardo la actividad en el reducer') 
            const existsActivity = state.activities.some(activity => activity.id === action.payload.newActivity.id);
            if (existsActivity) {
                // If the activity already exists, update it
                return {
                    ...state,
                    activities: state.activities.map(activity => 
                        activity.id === action.payload.newActivity.id ? action.payload.newActivity : activity
                    ),
                    editActivityID: '' // Reset editActivityID after saving
                }
            }
            // If the activity does not exist, add it
            return {
                ...state,
                activities: [...state.activities, action.payload.newActivity]
            }


        case 'editActivity':
            console.log('Se mando a editar la actividad en el reducer')
            return {
                ...state,
                editActivityID: action.payload.editActivityID
            }


        case 'deleteActivity':
            console.log('Se mando a eliminar la actividad en el reducer')
            return {
                // Filter out the activity to be deleted
                ...state,
                activities: state.activities.filter(activity => activity.id !== action.payload.deleteActivityID),
                deleteActivityID: ''
            }

        case 'deleteAllActivities':
            console.log('Se eliminaron todas las actividades en el reducer')
            return {
                ...state,
                activities: [],
                editActivityID: '',
                deleteActivityID: ''
            }
        default:
            return state;
    }
}