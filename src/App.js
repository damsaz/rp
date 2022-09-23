import React, { useState } from 'react';
import './App.css';
import './components/List';
import List from './components/List';
import AddUser from './components/Header';
import Add2 from './components/Add2';
import Users from './components/Data.json';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  

  const [people, updateUser] = useState([]);

  const addPerson = (person) => {
    updateUser([...people, person]);
  };

 
console.log(people);
  
  return (
    <><Add2 addPerson={addPerson} />
      <List people={people} />


    </>
/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
          <Route index element={} />
          <Route path="blogs" element={<Add2 />} />
        
      </Routes>
    </BrowserRouter> */

  );
}




export default App;
