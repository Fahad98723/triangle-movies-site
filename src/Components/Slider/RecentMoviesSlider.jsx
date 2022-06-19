
import React, { useEffect, useState } from 'react';
import {Carousel} from '3d-react-carousal';
import './RecentMovieSlider.css'
import axios from 'axios';
const RecentMoviesSlider = () => {
    const callback = function(index){
        console.log("callback",index);
    }

    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [topMovie, setTopMovie] = useState([]);

    const fetchMovies = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=95660f149d395ae5c4c30a131ae18ec9&page=${page}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
      };
    
      useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
        let db = content?.map((a) =>    
        <div className='banner-container' >
            <img src={a?.poster_path} alt="" />
            <div className='banner-text-container'>
                <div className='blogger-identity'>
                    <div>
                        <small className='blogger-name'>{a?.name}</small> <br />
                        <small  className=''>{a.popularity} Popularity</small>
                    </div>
                </div>

                <small >{a.overview.slice(0, 200)}</small>

            </div>
        </div> 

      )
    //   setLoading(false);
    console.log(db);
      setTopMovie(db);
        // eslint-disable-next-line
      }, [page]);


    //   console.log(content, topMovie);

    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];

    // const [topVideo, setTopVideo] = useState([]);
    // const [loading, setLoading] = useState("");
  
    // useEffect(() => {
    //   setLoading(true);
    //   const blogUrl = `https://aqueous-chamber-45567.herokuapp.com/blogs`;
    //   fetch(blogUrl)
    //     .then((response) => response.json())
    //     .then((data) => {
          

    //       let db = data?.blogs?.slice(-10)?.map((a) =>    
    //         <div className='banner-container' id={bg}>
    //             <BannerVideo v={a.video} t={a.thumbnail} />
    //             <div className='banner-text-container'>

    //                 <div className='blogger-identity'>
    //                     <Avatar alt="Remy Sharp" src={a.bloggerPhoto} />
    //                     <div>
    //                         <small id={text} className='blogger-name'>{a.bloggerName}</small> <br />
    //                         <small id={text} className=''>{a.views} Views</small>
    //                     </div>
    //                 </div>

    //                 <small id={text}>{a.description.slice(0, 200)}</small>

    //             </div>
    //         </div> 

    //       )
    //       setLoading(false);
    //       setTopVideo(db);
    //     });
    // }, []);


    return (
        <div className='slider bg-black py-10'>
       <Carousel slides={topMovie} autoplay={true} arrows={true} onSlideChange={callback}/>
        
    </div>
    );
};

export default RecentMoviesSlider;