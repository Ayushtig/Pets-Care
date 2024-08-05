import { useState } from "react"
import {BiCalendarPlus} from "react-icons/bi"


const AddAppointment=({onSendAppointment,lastId})=>{
  const clearData={
    ownerName:'',
    petName:'',
    aptDate:'',
    aptTime:'',
    aptNotes:''
  }
  let [toggleForm,setToggleForm]=useState(false)
  let [formData,setFormData]=useState(clearData)

  function formDataPublish(){
    const AppointmentInfo={
      id:lastId+1,
      ownerName:formData.ownerName,
      petName:formData.petName,
      aptDate:formData.aptDate+' '+formData.aptTime,
      aptTime:formData.aptTime,
      aptNotes:formData.aptNotes
    }
    onSendAppointment(AppointmentInfo)
    setFormData(clearData)
    setToggleForm(!toggleForm)
  }

    return(
        <div className="flex flex-col items-center justify-center">
        <button onClick={()=>{setToggleForm(!toggleForm)}} className="bg-red-500 text-white px-3 py-2 w-1/4 rounded-md text-3xl font-normal">
          <div><BiCalendarPlus className="inline-block align-text-top mt-1" />  Add Appointment</div>
        </button>
        <div className={`transition-max-height duration-500 ease-in-out overflow-hidden mt-10 ${
          toggleForm ? 'max-h-screen' : 'max-h-0'
        }`}>
          <div className=" rounded-sm pl-4 pr-4 pb-4 bg-red-500 mt-10 text-left">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="ownerName" className="block text-sm font-medium text-white sm:mt-px sm:pt-2">
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="ownerName" id="ownerName"
                onChange={(e)=>{setFormData({...formData,ownerName:e.target.value})}}
                value={formData.ownerName}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md bg-yellow-100 text-black px-2 py-1.5" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="petName" className="block text-sm font-medium text-white sm:mt-px sm:pt-2">
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="petName" id="petName"
                onChange={(e)=>{setFormData({...formData,petName:e.target.value})}}
                value={formData.petName}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md bg-yellow-100 text-black px-2 py-1.5" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptDate" className="block text-sm font-medium text-white sm:mt-px sm:pt-2">
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="date" name="aptDate" id="aptDate"
                onChange={(e)=>{setFormData({...formData,aptDate:e.target.value})}}
                value={formData.aptDate}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md bg-yellow-100 text-black px-2 py-1.5" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptTime" className="block text-sm font-medium text-white sm:mt-px sm:pt-2">
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="time" name="aptTime" id="aptTime"
                onChange={(e)=>{setFormData({...formData,aptTime:e.target.value})}}
                value={formData.aptTime}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md bg-yellow-100 text-black px-2 py-1.5" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptNotes" className="block text-sm font-medium text-white sm:mt-px sm:pt-2">
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea id="aptNotes" name="aptNotes" rows="3" cols='10'
                onChange={(e)=>{setFormData({...formData,aptNotes:e.target.value})}}
                value={formData.aptNotes}
                className="bg-yellow-100 text-black px-2 py-1.5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
            </div>
          </div>
  
  
          <div className="pt-5">
            <div className="flex justify-center">
              <button type="submit" onClick={formDataPublish} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-slate-800 bg-yellow-100 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}

export default AddAppointment