import React from 'react'
import { BiTrash } from 'react-icons/bi'

const AppointmentInfo = ({appointment, onDeleteAppointment}) => {
  return (
    <div className='bg-slate-500'> 
        <li className="px-3 py-5 flex items-start">
          <button type="button" onClick={()=>onDeleteAppointment(appointment.id)}
            className="p-1.5 mr-1.5 mt-1 rounded text-slate-600 bg-red-300 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <BiTrash /></button>
          <div className="flex-grow">
            <div className="flex items-center">
              <span className="flex-none font-medium text-2xl text-pink-400">{appointment.petName}</span>
              <span className="flex-grow text-right">Scheduled for : {appointment.aptDate}</span>
            </div>
            <div className='font-medium'><b className="font-bold text-green-500">Owner:</b> {appointment.ownerName}</div>
            <div className="leading-tight">{appointment.aptNotes}</div>
          </div>
        </li>
    </div>
  )
}

export default AppointmentInfo