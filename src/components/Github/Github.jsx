import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    // const [data, setData]=useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Govindghosh')
    //   .then(res => res.json())
    //   .then(data =>{
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    const data =useLoaderData()
    
  return (
    <>
    <div className="text-center m-2 bg-orange-300 text-black p-2 text-base font-semibold">Github Followers: {data.followers} 
    <h2>{data.name}</h2>
        <img src={data.avatar_url} alt='GitPicture'/>
    </div>
    </>
  )
}

export const githubinfoLoader = async () =>{
 const res =await fetch('https://api.github.com/users/Govindghosh')
 return res.json()
}

