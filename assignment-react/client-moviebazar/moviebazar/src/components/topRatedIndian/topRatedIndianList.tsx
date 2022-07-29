
import Card from '../common/card';
import { useEffect, useState } from 'react';
import { getTopRatedIndianMovieData } from '../../services/movieDetails';
import '../../css/intheater.css';

const TopRatedIndianList = (props:any) => {
    const [topRatedIndianMovieData, setTopRatedIndianMovieDataMovieData] = useState<any>([]);
    const [exp, setExp] = useState<boolean>(true);
    useEffect(() => {
        const fetchUpCOmingMovie = async () => {
            try {
               
                const data = await getTopRatedIndianMovieData();
              if(props.searchOn.length > 0){
                 const filteredData =  data.filter((movie:any)=>  movie.title.toLowerCase().includes(props.searchOn.toLowerCase()));
                 setTopRatedIndianMovieDataMovieData(filteredData);
                } else {
                setTopRatedIndianMovieDataMovieData(data);
                }
                
               
            } catch (err: any) {
            }
       }; fetchUpCOmingMovie();
    }, [props.searchOn])

    const  expandedViewClickHandler = (data :boolean,movieData :any) => {
        setExp(data);
        props.getShow(false,movieData);
}

    return(
        <div className="theater-container">
            {topRatedIndianMovieData.length > 0 &&
                topRatedIndianMovieData.map((movie: any ,idx:number) => {
                    return (
                        <div key={idx}>
                            <div className="card-container">
                                <Card  movieData = {movie} expandedViewClickHandler={expandedViewClickHandler} />
                            </div>
                        </div>
                    )
                })
            }
              {topRatedIndianMovieData.length === 0 && <div style={{position:"fixed", top:"40%" , left:"45%", fontSize:"25px", fontWeight:"bold"}}>No Data Found</div>}
           
        </div>
    );
}

export default TopRatedIndianList;