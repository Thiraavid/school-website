import React from 'react'

import { useEffect, useState } from 'react'
import axios from 'axios'
import AnimatedSection from '../components/AnimatedSection'

export default function Events(){
  const [events,setEvents]=useState([])
  useEffect(()=>{ axios.get('http://localhost:5000/api/events').then(r=>setEvents(r.data)).catch(()=>{}) },[])
  return (
    <AnimatedSection>

      <h2 className="text-3xl  font-semibold mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.length===0 && <p className="text-gray-600">No events yet.</p>}
        {events.map(e=>(
          <div key={e.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-bold text-xl">{e.title}</h3>
            <p className="text-gray-600">{e.date}</p>
            <p>{e.description}</p>
          </div>
        ))}
        </div>
      
    </AnimatedSection>
  )
}
