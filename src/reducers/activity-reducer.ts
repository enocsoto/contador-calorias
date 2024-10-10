import { Activity } from "../types"

//acciones: describen que esta pasando en la aplicacion
export type ActivityActions =
  { type: 'save-activity', payload: { newActivity: Activity } } |
  { type: 'set-activeId', payload: { id: Activity['id'] } } |
  { type: 'delete-activity', payload: { id: Activity['id'] } }

export type ActivityState = {
  activities: Activity[],
  activeId: Activity['id']
}

// state inicial: es el estado incial de la aplicacion
export const initialState: ActivityState = {
  activities: [],
  activeId: ''
}

//funcion que modifica los estados del Reducer o de los states
export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {

  if (action.type === 'save-activity') {
    //Este codigo maneja la logica para manejar el state
    let updatedActivities: Activity[] = [];
    if (state.activeId) {
      updatedActivities.map((activity: Activity) => activity.id === state.activeId ? action.payload.newActivity : activity)
    } else {
      updatedActivities = [...state.activities, action.payload.newActivity];
    }
    return {
      ...state,
      activities: updatedActivities,
      activeId: ''
    }
  }

  if (action.type === 'set-activeId') {
    return {
      ...state,
      activeId: action.payload.id
    }
  }

  if (action.type === 'delete-activity') {
    return {
      ...state,
      activities: state.activities.filter((activity: Activity) => activity.id !== action.payload.id)
    }
  }
  return state
}