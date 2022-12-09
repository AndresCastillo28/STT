import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppointmentStore } from "../../hooks/useAppointmentStore"
import { DateItem } from "./DateItem";

export const ViewAppointments = () => {

  const { startLoadingAppointments, appointments } = useAppointmentStore();

  const { isLoadingAppointments } = useSelector(state => state.appointments);

  useEffect(() => {
        startLoadingAppointments();
    
  }, [])

  if (isLoadingAppointments === true) {
    return (
      <div className="text-center">
        <div className="spinner-border" style={{ width: '6rem', height: '6rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 ">
      <table className="table table-dark table-striped text-white fw-bold">
          <thead>
            <tr className="table-danger">
              <th scope="col">Hora</th>
              <th scope="col">Doctor</th>
              <th scope="col">Agendar</th>
            </tr>
          </thead>
          { appointments.map(appointment => {
            if ( appointment.available === true ){
              return (
                <DateItem key={appointment._id} { ...appointment }/>
              )
            }
          }) }
      </table>
    </div>
  )
}
