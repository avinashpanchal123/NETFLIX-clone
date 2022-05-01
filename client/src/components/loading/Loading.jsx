import React from 'react'
import {TailSpin,} from "react-loader-spinner";
import "./Loading.css"

const Loading = ()=>{
  return (
    <>
    <div className='loading_container'>

        <TailSpin
     className = "loading_svg"
        />

    </div>
    </>
  )
}

export default Loading