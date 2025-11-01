import React from 'react'

import { useEffect, useState } from 'react'
import axios from 'axios'
import AnimatedSection from '../components/AnimatedSection'

export default function Faculty(){
  const [list,setList]=useState([])
  useEffect(()=>{ axios.get('http://localhost:5000/api/faculty').then(r=>setList(r.data)).catch(()=>{}) },[])
  return (
    <AnimatedSection>
      <div className='bg-black p-20'>
      <h2 className="text-3xl font-semibold mb-4 mt-8 text-white underline">Our Faculty</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {list.length===0 && <p className="text-gray-600">No faculty yet.</p>}
        {list.map(f=>(
          <div key={f.id} className="p-4 bg-white rounded shadow text-center">
            <img src={f.photo || 'https://via.placeholder.com/120'} alt={f.name} className="w-24 h-24 mx-auto rounded-full object-cover mb-3"/>
            <h3 className="font-bold">{f.name}</h3>
            <p className="text-gray-600">{f.subject}</p>
          </div>
        ))}
        </div>
        </div>
    </AnimatedSection>
  )
}
