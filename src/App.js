import {BiCalendar} from "react-icons/bi"
import Search from "./components/Search";
import AddAppointment from './components/AddAppointment'
import AppointmentInfo from "./components/AppointmentInfo";
import { useCallback, useEffect, useState } from "react";
import styles from './App.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";

function App() {
  let [appointmentList,setAppointmentList]=useState([])
  let [query,setQuery]=useState("")
  let [sortBy,setSortBy]=useState("petName")
  let [orderBy,setOrderBy]=useState("asc")

  const filteredAppointments=appointmentList.filter(
    item=>{
      return(
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a,b)=>{
    let order =(orderBy==='asc')?1:-1
    return(
      a[sortBy].toLowerCase()<b[sortBy].toLowerCase() ? -1*order : 1*order
    )
  })

  const fetchData = useCallback(()=>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setAppointmentList(data)
    })
  },[])

  useEffect(()=>{
    fetchData()
  },[fetchData]);

  return (
    <div className={` App container mx-auto font-thin bg-black text-white`}>
      <div className={`${styles.big} `}>
        <img src="../public/images/logo.png" alt=""/>
        <nav className="flex items-center justify-evenly w-4/5 float-right mt-5 text-white font-normal transition duration-750 ease-in-out">
          <h2 className="hover:text-red-400">Home</h2>
          <h2 className="hover:text-red-400">About</h2>
          <h2 className="hover:text-red-400">Services</h2>
          <h2 className="hover:text-red-400">Blog</h2>
          <h2 className="hover:text-red-400">Contact</h2>
          <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 font-medium rounded-full text-sm px-5 py-2.5 text-center">Book Appointment</button>
        </nav>
        <div className="w-2/5 h-96 mt-64 ml-32 flex flex-col gap-10">
          <h1 className="text-white text-8xl font-medium">We Care Your Pets.</h1>
          <p className="text-1xl font-normal-sans">It will be followed by a student, but it will happen at such a time that it will be difficult and difficult to achieve it.</p>
          <button className="float-left w-64 py-2.5 me-2 mb-2 text-2xl text-white font-medium focus:outline-none   hover:text-red-400 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white flex items-center gap-10">Contact Now <IoIosArrowRoundForward className="text-5xl"/></button>
        </div>
      </div>
      <div className={`${styles.next} `}>
        <div className="w-1/2 h-40 mt-40 flex-col">
          <h3 className="text-black font-semibold text-1xl text-center">Our Professional Services</h3>
          <h1 className="text-black font-bold text-5xl text-center mt-10">Best Pet Care Services</h1>
        </div>
        <div className="flex gap-10 -mt-20">
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden  py-6 sm:py-12">
    <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-purple-200 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-24 w-24 place-items-center rounded-full bg-purple-300 transition-all duration-300 group-hover:bg-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{enableBackground:'new 0 0 128 128'}} xmlSpace="preserve"><path style={{fill:"#434544"}} d="M55.161 86.492a7.978 7.978 0 0 1-5.657-2.339 7.921 7.921 0 0 1-2.068-3.588 7.93 7.93 0 0 1-3.588-2.068c-3.119-3.119-3.119-8.194 0-11.313a7.976 7.976 0 0 1 9.11-1.559l12.666-12.666a7.977 7.977 0 0 1 1.559-9.11c3.119-3.119 8.194-3.119 11.313 0a7.921 7.921 0 0 1 2.068 3.588 7.93 7.93 0 0 1 3.588 2.068c3.119 3.119 3.119 8.194 0 11.313a8.012 8.012 0 0 1-9.409 1.405l-12.52 12.521a8.012 8.012 0 0 1-1.405 9.409 7.978 7.978 0 0 1-5.657 2.339zm-5.658-18.657a4.99 4.99 0 0 0-3.535 1.468c-.944.944-1.464 2.2-1.464 3.536s.52 2.591 1.464 3.536a4.992 4.992 0 0 0 2.933 1.425l1.153.146.146 1.153a4.994 4.994 0 0 0 4.961 4.397 4.97 4.97 0 0 0 3.536-1.464 5 5 0 0 0 .425-6.578l-.807-1.044 16.094-16.094 1.044.807a5.002 5.002 0 0 0 6.579-.425c.944-.944 1.464-2.2 1.464-3.536s-.52-2.591-1.464-3.536a4.992 4.992 0 0 0-2.933-1.425l-1.153-.146-.146-1.153a4.994 4.994 0 0 0-4.961-4.397 4.97 4.97 0 0 0-3.536 1.464 4.976 4.976 0 0 0-.573 6.375l.719 1.031-16.074 16.074-1.031-.719a4.949 4.949 0 0 0-2.841-.895z"/></svg>
            </span>
            <div
                class="space-y-6 pt-5 text-base leading-7 text-gray-500 transition-all duration-300 group-hover:text-slate-900">
                <h1 className="text-right font-medium transition-all duration-300 group-hover:text-orange-500">Pet Boarding</h1>
                <p>In the same way, a great deal of pain and suffering will happen at the same time.</p>
            </div>
            
        </div>
    </div>
</div>
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
    <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-purple-200 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-24 w-24 place-items-center rounded-full bg-purple-300 transition-all duration-300 group-hover:bg-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlSpace="preserve"  style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2
    }}><path d="m36.891 7.664 1.414 1.414M51.033 21.806l-1.414-1.414M30.527 28.17a3 3 0 1 1-4.244 4.242 3 3 0 0 1 4.244-4.242z" style={{
      fill: 'none',
      stroke: '#222a33',
      strokeWidth: '2px'
    }}/><path d="m51.858 20.981-9.428 9.428c-3.17 3.17-7.938 3.767-11.71 1.791M26.497 27.977c-1.976-3.772-1.379-8.54 1.791-11.71l9.428-9.428M25.754 32.943l-8.309 8.308a7.502 7.502 0 0 0 0 10.607s0 0 0 0a7.5 7.5 0 0 0 10.607 0l9.546-9.546" style={{
      fill: 'none',
      stroke: '#222a33',
      strokeWidth: '2px'
    }}/><circle cx="40.5" cy="39" r="3.5" style={{
      fill: 'none',
      stroke: '#222a33',
      strokeWidth: '2px'
    }}/></svg>
    
            </span>
            <div
                class="space-y-6 pt-5 text-base leading-7 text-gray-500 transition-all duration-300 group-hover:text-slate-900">
                <h1 className="text-right font-medium transition-all duration-300 group-hover:text-orange-500">Pet Treatment</h1>
                <p>In the same way, a great deal of pain and suffering will happen at the same time.</p>
            </div>
            
        </div>
    </div>
</div>
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
    <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-purple-200 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-24 w-24 place-items-center rounded-full bg-purple-300 transition-all duration-300 group-hover:bg-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="petri dish"><path d="M28.93 10.61a1 1 0 0 0-1.85.78 12 12 0 1 1-2.42-3.7 1 1 0 1 0 1.44-1.38A13.86 13.86 0 0 0 16 2a14 14 0 1 0 12.93 8.61z"/><path d="M13 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM10.5 20A2.5 2.5 0 0 1 8 17.5a1 1 0 0 0-2 0 4.5 4.5 0 1 0 4.5-4.5 4.61 4.61 0 0 0-1.93.43 1 1 0 0 0-.47 1.34 1 1 0 0 0 1.33.47A2.46 2.46 0 0 1 10.5 15a2.5 2.5 0 0 1 0 5zM17.5 26a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5zm0-3a.5.5 0 1 1-.5.5.5.5 0 0 1 .5-.5zM23 11.5a2.5 2.5 0 1 0-2.5 2.5 2.5 2.5 0 0 0 2.5-2.5zm-3 0a.5.5 0 1 1 .5.5.5.5 0 0 1-.5-.5zM23 17a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 1 0-3 3 1 1 0 0 0 0-2 1 1 0 0 1 0-2z"/></g></svg>
            </span>
            <div
                class="space-y-6 pt-5 text-base leading-7 text-gray-500 transition-all duration-300 group-hover:text-slate-900">
                <h1 className="text-right font-medium transition-all duration-300 group-hover:text-orange-500">Pet Vaccination</h1>
                <p>In the same way, a great deal of pain and suffering will happen at the same time.</p>
            </div>
            
        </div>
    </div>
</div>
</div>
      </div>
      <h1 className={` text-5xl mb-20 text-center mt-32 font-medium`}>
        <BiCalendar className="inline-block text-red-500 align-top mr-3 mt-1"/> Your Appointments
      </h1>  
      <AddAppointment 
        onSendAppointment={myAppointment=>setAppointmentList([...appointmentList,myAppointment])}
        lastId={appointmentList.reduce((max,item)=>Number(item.id)>max?Number(item.id):max,0)}
      />
      
      <Search 
        query={query} 
        onQueryChange={myQuery=>{setQuery(myQuery)}}
        orderBy={orderBy}
        onOrderByChange={myOrder=>setOrderBy(myOrder)}
        sortBy={sortBy}
        onSortByChange={mySort=>setSortBy(mySort)}
        />
      
      <ul className="divide-y divide-slate-700">
        {filteredAppointments.map(appointment=>(
          <AppointmentInfo 
            key={appointment.id} 
            appointment={appointment}
            onDeleteAppointment={appointmentId=>{setAppointmentList(appointmentList.filter(appointment=>appointment.id!==appointmentId))}}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
