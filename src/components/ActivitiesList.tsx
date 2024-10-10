import { Dispatch, useMemo } from "react"
import { categories } from "../data/categories"
import type { Activity } from "../types"
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { ActivityActions } from "../reducers/activity-reducer"
type ActivitiesListProps = {
  activities: Activity[],
  dispatch: Dispatch<ActivityActions>
}
const ActivitiesList = ({ activities, dispatch }: ActivitiesListProps) => {
  const categoryNames = useMemo(() => (
    category: Activity['category']
  ) => categories.map(cat => cat.id === category ? cat.name : ''), [activities]);

  const isEmptyActivities = useMemo(() => !activities.length, [activities]);
  return (
    <>
      <h2 className="text-4xl font-semibold text-slate-800 text-center">
        Activities List
      </h2>
      {isEmptyActivities ? <p className=" text-center  my-5 text-xl text-slate-500">No hay actividades aún...</p>
        :
        activities.map(activity => (
          <div
            key={activity.id}
            className="px-5 py-10 bg-white mt-5 flex justify-between"
          >
            <div className="space-y-2 relative">
              <p
                className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-semibold 
                  ${activity.category === 1 ? 'bg-cyan-900' : 'bg-sky-900 text-white'}`}>
                {categoryNames(+activity.category)}
              </p>
              <p className="text-2xl font-semibold pt-5">Actividad: {activity.name}</p>
              <p className="font-bold text-4xl text-sky-800">
                {activity.calories} {''}
                <span>Calorias</span>
              </p>
            </div>
            {/* actividades actualizar eliminar */}
            <div className="flex gap-5 items-center">
              <button>
                <PencilSquareIcon
                  className="h-8 w-8 text-slate-800"
                  onClick={() => dispatch({ type: 'set-activeId', payload: { id: activity.id } })}
                />
              </button>

              <button>
                <XCircleIcon
                  className="h-8 w-8 text-red-500"
                  onClick={() => dispatch({ type: 'delete-activity', payload: { id: activity.id } })}
                />
              </button>
            </div>
          </div>
        ))
      }
    </>
  )
}
export default ActivitiesList