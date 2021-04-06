import {useDispatch} from 'react-redux';
import {useEffect} from "react";

import '../styles/App.css';

import {GROUPS} from '../constants';
import {setGroups} from '../state/actions';
import {Search, SearchResult} from './search';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // Save the groups in our redux store on page load
    dispatch(setGroups(GROUPS));
  }, []);


  return (
    <div className="app">
      <h2 className="text-welcome">Welcome to Howdy Groups</h2>
      <Search/>
      <SearchResult/>
    </div>
  );
}


export default App;
