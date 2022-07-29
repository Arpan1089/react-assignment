import { ChangeEvent, useEffect, useState } from 'react';
import React from 'react';
import '../../css/common.css';
const Search = (props: any) => {
    const [searchString, setSearchString] = useState<string>('');
    const MyContext = React.createContext('');
    const onChangeHandler = (e: any) => {
        e.preventDefault();
        setSearchString(x => e.target.value);
        setTimeout(() => { props.searchData(e.target.value) }, 200);
        <MyContext.Provider value={searchString}></MyContext.Provider>
    }

    return (
        <>
            <form onSubmit={onChangeHandler}>
                <input onChange={onChangeHandler} type="search" placeholder="Search..." value={searchString} />
                <button type="submit">Search</button>
            </form>
            {/* <div style={{float: "right", paddingTop: "1%"}}>
        <input type="text" placeholder="Search.." name="search" />
        <button className='searchbtn'><i className="fa fa-search"></i></button>
        </div> */}

        </>
    );
}

export default Search;