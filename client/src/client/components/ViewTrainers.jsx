import { useEffect } from "react"
import { TrainerItem, Trainer } from "../"
import { useAuthStore, useTrainersStore } from "../../hooks"

export const ViewTrainers = () => {

  const { startLoadingTrainers, trainers } = useTrainersStore()
  const { user } = useAuthStore();

  useEffect(() => {
    startLoadingTrainers();
  }, [])
  

  return (
    <div className="container mt-5">
      <div className="row">
        { 
          user.trainer === null ? trainers.map(trainer => { return( <TrainerItem { ...trainer}/> )}) : <Trainer /> }
      </div>
    </div>
  )
}
