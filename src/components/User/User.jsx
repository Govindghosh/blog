import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid}=useParams()
  return (
    <>
        <h3 className="text-orange-500 font-semibold p-1 bg-green-700">User: {userid} </h3>    
    </>
  )
}


