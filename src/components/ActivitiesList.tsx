import { useMemo } from "react"
import { categories } from "../data/categories"
import { Activity } from "../types"
type ActivitiesListProps = {
  activities: Activity[]
}
const ActivitiesList = ({ activities }: ActivitiesListProps) => {
  const categoryNames = useMemo(() => (
    category: Activity['category']
  ) => categories.map(cat => cat.id === category ? cat.name : ''), [activities])
  return (
    <>
      <h2 className="text-4xl font-semibold text-slate-800 text-center">
        Activities List
      </h2>
      {
        activities.map(activity => (
          <div
            key={activity.id}
            className="px-5 py-10 bg-white mt-5 flex justify-between"
          >
            <div className="space-y-2 relative">
              <p
                className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-semibold 
                  ${activity.category === 1 ? 'bg-cyan-900' : 'bg-sky-900 text-white'}`}>{categoryNames(+activity.category)}</p>
              <p className="text-2xl font-semibold pt-5">Actividad: {activity.name}</p>
              <p className="font-bold text-4xl text-sky-800">
                {activity.calories} {''}
                <span>Calorias</span>
              </p>
            </div>
            <div></div>
          </div>
        ))
      }
    </>
  )
}
export default ActivitiesList