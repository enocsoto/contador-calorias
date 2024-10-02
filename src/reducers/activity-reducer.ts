import { Activity } from "../types"

//acciones: describen que esta pasando en la aplicacion
export type ActivityActions = {
  type: 'save-activity',
  payload: { newActivity: Activity }
}

export type ActivityState = {
  activities: Activity[]
}

// state inicial: es el estado incial de la aplicacion
export const initialState: ActivityState = {
  activities: []
}

//funcion que modifica los estados del Reducer o de los states
export const activityReducer = (
  state: ActivityState = initialState,
  actions: ActivityActions
) => {

  if (actions.type === 'save-activity') {
    //Este codigo maneja la logica para manejar el state
    console.log(`desde el type: save-activity`)
  }
  return {
    ...state,
    activities: [...state.activities, actions.payload.newActivity]
  }
  return state
}