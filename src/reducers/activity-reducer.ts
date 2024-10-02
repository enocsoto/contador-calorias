import { Activity } from "../types"

//acciones: describen que esta pasando en la aplicacion
export type ActivityActions =
  { type: 'save-activity', payload: { newActivity: Activity } } |
  { type: 'set-activeId', payload: { id: Activity['id'] } }

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
    console.log(`desde el type: save-activity`)
    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity]
    }
  }

  if (action.type === 'set-activeId') {
    return {
      ...state,
      activeId: action.payload.id
    }
  }
  return state
}