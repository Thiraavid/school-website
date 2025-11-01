import React from 'react'

import { useEffect, useState } from 'react'
import axios from 'axios'
import AnimatedSection from '../components/AnimatedSection'

export default function Gallery(){
  const [images,setImages]=useState([])
  useEffect(()=>{ axios.get('http://localhost:5000/api/gallery').then(r=>setImages(r.data)).catch(()=>{}) },[])
  return (
    <AnimatedSection>
      <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {images.length===0 && <p className="text-gray-600">No images yet.</p>}
        {images.map(img=>(
          <div key={img.id} className="bg-white rounded shadow overflow-hidden">
            <img src={`http://localhost:5000/uploads/${img.filename}`} alt={img.caption || 'img'} className="w-full h-48 object-cover"/>
            <div className="p-3">
              <p className="text-gray-600">{img.caption}</p>
              <p className="text-sm text-gray-400">{new Date(img.uploaded_at).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
