import React from "react";

import { useState } from 'react'
import axios from 'axios'

export default function Admin(){
  const [type,setType]=useState('event')
  const [form,setForm]=useState({})
  const endpoints = {
    event: '/api/events',
    faculty: '/api/faculty',
    academic: '/api/academics',
    announcement: '/api/announcements',
    gallery: '/api/gallery',
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(type==='gallery'){
        const fd = new FormData();
        fd.append('image', form.image);
        fd.append('caption', form.caption || '');
        await axios.post('http://localhost:5000/api/gallery', fd, { headers: {'Content-Type':'multipart/form-data'}});
      } else {
        await axios.post(`http://localhost:5000${endpoints[type]}`, form);
      }
      alert('Added successfully');
      setForm({});
    } catch (err) {
      console.error(err);
      alert('Failed to add');
    }
  }

  return (
    <div className="flex justify-center items-cetner">
    <div>
  
      <h2 className="text-3xl font-semibold mb-4 text-center">Admin Dashboard</h2>
      <div className="flex gap-2 mb-4">
        {['event','faculty','academic','announcement','gallery'].map(t=>(
          <button key={t} onClick={()=>setType(t)} className={type===t ? 'bg-blue-600 text-white px-3 py-1 rounded' : 'bg-gray-200 px-3 py-1 rounded'}>
            {t}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="max-w-md space-y-3">
        {type==='event' && <>
          <input className="w-full border p-2" placeholder="Title" onChange={(e)=>setForm({...form,title:e.target.value})}/>
          <input type="date" className="w-full border p-2" onChange={(e)=>setForm({...form,date:e.target.value})}/>
          <textarea className="w-full border p-2" placeholder="Description" onChange={(e)=>setForm({...form,description:e.target.value})}/>
        </>}
        {type==='faculty' && <>
          <input className="w-full border p-2" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
          <input className="w-full border p-2" placeholder="Subject" onChange={(e)=>setForm({...form,subject:e.target.value})}/>
          <input className="w-full border p-2" placeholder="Photo URL" onChange={(e)=>setForm({...form,photo:e.target.value})}/>
        </>}
        {type==='academic' && <>
          <input className="w-full border p-2" placeholder="Title" onChange={(e)=>setForm({...form,title:e.target.value})}/>
          <textarea className="w-full border p-2" placeholder="Description" onChange={(e)=>setForm({...form,description:e.target.value})}/>
        </>}
        {type==='announcement' && <>
          <input className="w-full border p-2" placeholder="Title" onChange={(e)=>setForm({...form,title:e.target.value})}/>
          <textarea className="w-full border p-2" placeholder="Message" onChange={(e)=>setForm({...form,message:e.target.value})}/>
        </>}
        {type==='gallery' && <>
          <input type="file" className="w-full" onChange={(e)=>setForm({...form,image:e.target.files[0]})}/>
          <input className="w-full border p-2" placeholder="Caption" onChange={(e)=>setForm({...form,caption:e.target.value})}/>
          </>}
          <div className="flex justify-center">
        <button className="bg-blue-600  text-white px-4 py-2 rounded">Add {type}</button></div>
      </form>
      </div>
      </div>
  )
}
