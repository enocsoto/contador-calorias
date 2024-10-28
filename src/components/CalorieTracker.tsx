import { useMemo } from "react"
import type { Activity } from "../types"
import CaloriesDisplay from "./CaloriesDisplay"

type CalorieTrackerProps = {
  activities: Activity[],
}

const CalorieTracker = ({ activities }: CalorieTrackerProps) => {
  const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])
  const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])
  const calculateTotal = useMemo(() => caloriesBurned - caloriesConsumed, [activities]);

  return (
    <>
      <h2 className="text-4xl from-neutral-900 text-white text-center">
        Resumen de Calorias</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CaloriesDisplay
          calories={caloriesConsumed}
          text='Consumidas'
        />

        <CaloriesDisplay
          calories={caloriesBurned}
          text='Quemadas'
        />
        <CaloriesDisplay
          calories={calculateTotal}
          text='Total calorias quemadas'
        />
      </div>
    </>
  )
}
export default CalorieTracker