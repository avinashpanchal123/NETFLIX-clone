import React,{useState, useEffect} from 'react'
import axios from "../../axios"
import requests from '../../request';
import "../styles/Banner.css"
import YouTube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = ()=> {
    const [banner, setBanner] = useState("");
    const [trailer, setTrailer] = useState(false);
    const [showTrailer, setShowTrailer] = useState(false)

    useEffect(()=>{
        const getData = async()=>{
            const request = await axios.get(requests.fetchTopRated);
            const data =  await request.data.results;
            let random = Math.floor(Math.random() * (data.length-1))
            setBanner(data[random])
           console.log(data[random])
        //    console.log(current_local_user);
        }
        getData()
    }, [])

    const truncate  = (str, n)=>{
        return str?.length > n ? str.substr(0, n-1) + "...":str
    }

    const playTrailer= async()=>{
        const request = await axios.get(`movie/${banner?.id}?api_key=d8d01a05f86a4da428034a687a0beea4&append_to_response=videos`);
        const data = await request.data.videos;
        let movieTrailer = data?.results[0].key
        setTrailer(movieTrailer)
        setShowTrailer(!showTrailer)
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          origin: 'http://localhost:3000' 
        }
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
                <button onClick={playTrailer} className="banner_btn">Play</button>
                <button className="banner_btn">My List</button>
            </div>
            <h1 className="banner_discription">
                {truncate(banner?.overview, 150)}
            </h1>
        </div>
        <div className="banner_fadeBottom">

        </div>
    </header>
      {
          showTrailer &&
          <YouTube videoId={trailer} opts={opts}  />
      }
      
    </>
  )
}

export default Banner