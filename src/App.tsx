import { useEffect, useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivitiesList from "./components/ActivitiesList"
import CalorieTracker from "./components/CalorieTracker"

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState)
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities))
  }, [state.activities])

  return (
    <>
      <header className="bg-slate-800 py-3">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center text-3xl font-semibold text-white uppercase">Contador de Calorias</h1>
        </div>
      </header>

      <section className="bg-slate-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>

      <section className="bg-slate-800 py-10 px-5 mt-2 shadow-lg ">
        <div className="max-w-2xl mx-auto">
          <CalorieTracker
            activities={state.activities}
          />
        </div>
      </section>

      <section className="mx-auto p-10 max-w-4xl">
        <div className="max-w-4xl mx-auto">
          <ActivitiesList
            activities={state.activities}
            dispatch={dispatch}
          />
        </div>
      </section>
    </>
  )
}

export default App
