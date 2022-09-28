import React, { useState } from 'react';
import './App.css';
import UsersList from './components/UsersList';
import List from './components/List';
import AddUser from './components/AddUser';
import { useCookies } from 'react-cookie';
function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
   
  const [Users, updateUser] = useState(UsersList);
  
  const addPerson = (person) => {
    updateUser(Users => [...Users, person]);
  
    console.log(person);
    console.log(Users);
  };

  return (
 

   
 
      <><AddUser addPerson={addPerson}></AddUser><List people={Users}></List></>
  

  );

}

export default App;
