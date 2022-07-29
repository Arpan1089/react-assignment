import Card from '../common/card';
import { useEffect, useState } from 'react';
import { getFavMovieData } from '../../services/movieDetails';
import '../../css/intheater.css';

const FavouritList = (props:any) => {
   
    const [favMovieData, setFavMovieData] = useState<any>([]);
    const [deleteRes, setDeleteRes] = useState<any>([]);
    const [exp, setExp] = useState<boolean>(true);
    const [err,setErr] = useState();
    useEffect(() => {
        const fetchFavMovie = async () => {
            try {
               
                const data = await getFavMovieData();
                if(props.searchOn.length > 0){
                    const filteredData =  data.filter((movie:any)=>  movie.title.toLowerCase().includes(props.searchOn.toLowerCase()));
                setFavMovieData(filteredData);
                } else{
                    setFavMovieData(data);
                }
                
               
            } catch (err: any) {
            }
       }; fetchFavMovie();
    }, [deleteRes])

   const deleteSucess = (res: any, err: any) => {
    setDeleteRes(res );
    setErr(err);
    }
    const  expandedViewClickHandler = (data :boolean,movieData :any) => {
        setExp(data);
        props.getShow(false,movieData);
}

    
    return (
        <div className="theater-container">
            {favMovieData.length > 0 &&
                favMovieData.map((movie: any ,idx:number) => {
                    return (
                        <div key={idx}>
                            <div className="card-container">
                                <Card  movieData = {movie}  removeButton={true} deleteSucess={deleteSucess}  expandedViewClickHandler={expandedViewClickHandler}  />
                            </div>
                        </div>
                    )
                })
            }
            {favMovieData.length === 0 && <div style={{position:"fixed", top:"40%" , left:"45%", fontSize:"25px", fontWeight:"bold"}}>No Data Found</div>}
           
        </div>
    );
}

export default FavouritList;