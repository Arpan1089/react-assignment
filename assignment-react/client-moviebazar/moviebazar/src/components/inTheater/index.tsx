import NavBar from "../navbar";
import { useState } from 'react';
import '../../css/intheater.css';
import Theater from "./theater";
import ExpandedView from '../common/expandedView';


const InTheater = () => {
    const [search, setSearch] = useState<string>('');
    const [show, setShow] = useState<boolean>(true);
    const [dataToExpand, setDataToExpand] = useState([]);
    const searchData= (searchString: string) => {
        setSearch(searchString);
}
  const getShow = (data: boolean,movieData: any) => {
    setShow(data);
    let test: any = [];
    test.push(movieData);
    setDataToExpand(test);
  }
  const restoreExpandedView = () =>  {
        setShow(true);
        setDataToExpand([]);
  }

    return (
        <>
     {!show && <ExpandedView movie={dataToExpand} restoreExpandedView={restoreExpandedView}/>}
      {show && <div>
            <NavBar searchData={searchData} />
            <Theater searchOn={search} getShow={getShow}/>
           </div> }
           </>
    );
}

export default InTheater;