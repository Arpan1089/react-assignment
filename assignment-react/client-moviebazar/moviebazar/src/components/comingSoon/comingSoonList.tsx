import Card from '../common/card';
import { useEffect, useState } from 'react';
import { getUpcomingMovieData } from '../../services/movieDetails';
import '../../css/intheater.css';

const ComingSoonList = (props: any) => {
    const [upComingMovieData, setUpComingMovieData] = useState<any>([]);
    const [exp, setExp] = useState<boolean>(true);
 
    useEffect(() => {
        const fetchUpCOmingMovie = async () => {
            try {
               
                const data = await getUpcomingMovieData();
                if(props.searchOn.length > 0){
                    const filteredData =  data.filter((movie:any)=>  movie.title.toLowerCase().includes(props.searchOn.toLowerCase()));
                    
                 setUpComingMovieData(filteredData);
               } else {
                setUpComingMovieData(data);
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
            {upComingMovieData.length > 0 &&
                upComingMovieData.map((movie: any ,idx : number) => {
                    return (
                        <div key={idx}>
                            <div className="card-container">
                                <Card  movieData = {movie}  expandedViewClickHandler={expandedViewClickHandler}/>
                            </div>
                        </div>
                    )
                })
            }
             {upComingMovieData.length === 0 && <div style={{position:"fixed", top:"40%" , left:"45%", fontSize:"25px", fontWeight:"bold"}}>No Data Found</div>}
        </div>
    );
}

export default ComingSoonList;