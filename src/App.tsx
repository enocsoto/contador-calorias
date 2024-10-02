import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivitiesList from "./components/ActivitiesList"

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <header className="bg-slate-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorias</h1>
        </div>
      </header>

      <section className="bg-slate-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} />
        </div>
      </section>
      <section className="mx-auto p-10 max-w-4xl">
        <div className="max-w-4xl mx-auto">
          <ActivitiesList
            activities={state.activities}
          />
        </div>
      </section>
    </>
  )
}

export default App
