import { useState } from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  const [listOfUSer, setListOfUSer] = useState([])
  return (
    <div className="App">
    <UserList listOfUSer={listOfUSer} setListOfUSer={setListOfUSer}/>
   
    {/* {listOfUSer} */}
    </div>
  );
}

export default App;
