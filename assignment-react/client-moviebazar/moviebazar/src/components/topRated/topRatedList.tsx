import {getTopRatedMovieData} from '../../services/movieDetails';
import { useState, useEffect } from 'react';
import Card from '../common/card';
import '../../css/intheater.css';

const TopRatedList = (props:any) => {

    const [movieData, setMovieData] = useState<any>([]);
    const [exp, setExp] = useState<boolean>(true);
   
    useEffect(() => {
        const fetchMenu = async () => {
            try {
               
                const data = await getTopRatedMovieData();
                if(props.searchOn.length > 0){
                    const filteredData =  data.filter((movie:any)=>  movie.title.toLowerCase().includes(props.searchOn.toLowerCase()));
                    setMovieData(filteredData);
                } else {
                    setMovieData(data);
                }
                
               
            } catch (err: any) {
            }
        }; fetchMenu();
    }, [props.searchOn])

    const  expandedViewClickHandler = (data :boolean,movieData :any) => {
        setExp(data);
        props.getShow(false,movieData);
}


  return(
    
    <div className="theater-container">
          {movieData.length > 0 &&
                movieData.map((movie: any ,idx:number) => {
                    return (
                        <div key={idx}>
                            <div className="card-container">
                                <Card  movieData = {movie} expandedViewClickHandler={expandedViewClickHandler} />
                            </div>
                        </div>
                    )
                })
            }
              {movieData.length === 0 && <div style={{position:"fixed", top:"40%" , left:"45%", fontSize:"25px", fontWeight:"bold"}}>No Data Found</div>}
    </div>
  );
}

export default TopRatedList;