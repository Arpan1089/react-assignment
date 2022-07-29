import axios from 'axios';


const getUpcomingMovies = () => {
    return axios.get('http://localhost:3000/movies-in-theaters').then(res => res.data);
}


const pushFavDataToServer = (favMovie: Omit<any, 'title'>) => {
    return axios.post<any>('http://localhost:3000/favourit', favMovie, {
        headers: {
            'Content-type': 'Application/json'
        }
    }).then(res => res.data);
}

const getFavMovieData = () => {
    return axios.get('http://localhost:3000/favourit').then(res => res.data);
}

const getUpcomingMovieData = () => {
    return axios.get('http://localhost:3000/movies-coming').then(res => res.data);
}

const getTopRatedIndianMovieData = () => {
    return axios.get('http://localhost:3000/top-rated-india').then(res => res.data);
}
const getTopRatedMovieData = () => {
    return axios.get('http://localhost:3000/top-rated-movies').then(res => res.data);
}

const removeFromFav = (id : any) => {
    return axios.delete(`http://localhost:3000/favourit/${id}`).then(res => res.data);
}



export {
    getUpcomingMovies,
    pushFavDataToServer,
    getFavMovieData,
    getUpcomingMovieData,
    getTopRatedIndianMovieData,
    removeFromFav,
    getTopRatedMovieData
    
}