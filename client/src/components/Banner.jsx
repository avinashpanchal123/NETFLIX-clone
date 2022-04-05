import React,{useState, useEffect} from 'react'
import axios from "../axios"
import requests from '../request';
import "./styles/Banner.css"


const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = ()=> {
    const [banner, setBanner] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            const request = await axios.get(requests.fetchNetflixOriginals);
            const data =  await request.data.results;
            let random = Math.floor(Math.random() * (data.length-1))
            setBanner(data[random])
           console.log(data[random])
        }
        getData()
    }, [])

    const truncate  = (str, n)=>{
        return str?.length > n ? str.substr(0, n-1) + "...":str
    }


  return (
    <>
    <header className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
        backgroundPosition:"center center"
    }}
    >
        <div className="banner_contents">
            <h1 className='banner_title'>{banner?.title || banner?.name || banner?.original_name}</h1>
            <div className="banner_btns">
                <button className="banner_btn">Play</button>
                <button className="banner_btn">My List</button>
            </div>
            <h1 className="banner_discription">
                {truncate(banner?.overview, 150)}
            </h1>
        </div>
        <div className="banner_fadeBottom">

        </div>
    </header>
    </>
  )
}

export default Banner