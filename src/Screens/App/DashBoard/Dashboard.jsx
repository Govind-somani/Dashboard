import React, { useEffect, useState } from 'react'
import FeaturedInfo from '../../../Compnonent/featuredInfo/FeaturedInfo'
import RGrid from '../../../Compnonent/Grid/RGrid'
import {dataRecord} from '../../../dummyData'

const Dashboard=()=> {
  const [data,setData]= useState([])
  const [keysValue, setKeyValue]= useState()
  const [value, setValue]= useState()
  
  useEffect(()=>{
    setData(dataRecord)
    // data.map((item)=>(
    //   setKeyValue((item))
    // ))
    // for(let i=0; i<data.length;i++){
    //   setKeyValue(data[i])
    // }
  },[data])
 
// console.log(keysValue)
  return (
    <>
    <div className='home'>
    <FeaturedInfo />
    <div className='css'>
      {data && data.slice(0,3).map((item)=>(

      <RGrid  res={item} />

    )  ) }
    </div>
    </div>
    

    </>
  )
}

export default Dashboard