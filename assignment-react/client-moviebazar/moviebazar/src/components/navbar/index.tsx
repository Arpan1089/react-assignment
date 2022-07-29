import '../../css/navbar.css';
import { NavLink } from "react-router-dom";
import Search from '../common/search';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
const NavBar = (props:any) => {
    // useEffect(() => {
    //     const history = useHistory();
    //     history.push("/intheater");
    //   });
    return (
        <>
            <div className="topnav">
                <NavLink className={isActive => (isActive ? "active" : "")} to="/intheater">Movies in theaters</NavLink>
                <NavLink className={isActive => (isActive ? "active" : "")} to="/comingsoon">Coming Soon</NavLink>
                <NavLink className={isActive => (isActive ? "active" : "")} to="/topratedindian">Top rated Indian</NavLink>
                <NavLink className={isActive => (isActive ? "active" : "")} to="/toprated">Top rated</NavLink>
                <NavLink className={isActive => (isActive ? "active" : "")} to="/favourite">Favourites</NavLink>
                <Search  searchData={props.searchData}/>
            </div>
        </>
    );
}

export default NavBar;