import React from 'react'
import { useEffect } from 'react';
import { useAppointmentStore } from '../../hooks/useAppointmentStore'

export const DateItem = ({ time, doctor, _id }) => {

  const { startScheduleAppointment } = useAppointmentStore();

  return (
    <tbody>
      <tr>
        <td>{time}</td>
        <td>{doctor}</td>
        <td> <button className='btn btn-sm btn-danger' onClick={() => startScheduleAppointment(_id)}>Agendar</button> </td>
      </tr>
    </tbody>
  )
}
