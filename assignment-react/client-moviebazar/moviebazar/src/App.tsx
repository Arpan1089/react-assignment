import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import InTheater from './components/inTheater';
import ComingSoon from './components/comingSoon';
import TopRatedIndian from './components/topRatedIndian';
import Favourite from './components/favourite';
import { Redirect } from 'react-router-dom';
import TopRated from './components/topRated';
import ExpandedView from './components/common/expandedView';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/">
          <Redirect to="intheater" />
        </Route>
        <Route path="/intheater" exact> <InTheater /></Route>
        <Route path="/comingsoon" exact> <ComingSoon /></Route>
        <Route path="/topratedindian" exact> <TopRatedIndian /></Route>
        <Route path="/favourite" exact> <Favourite /></Route>
        <Route path="/toprated" exact> <TopRated /></Route>
         <Route path="/expanded" exact> <ExpandedView /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
