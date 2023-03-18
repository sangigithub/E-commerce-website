import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Ndata from './Pdata'

function Details() {
    let {id}=useParams()
    let data=Ndata.find((a)=>a.id==id)
  return (
    <>
    <div className='container'>
    <h1>{data.name}</h1>
    <img src={data.cover}/>
    </div>
    </>
  )
}

export default Details