import React, { useState } from 'react';
import './App.css';
import UsersList from './components/UsersList';
import List from './components/List';
import Add2 from './components/Add2';
function App() {
  
   
  const [Users, updateUser] = useState(UsersList);
  
  const addPerson = (person) => {
    updateUser(Users => [...Users, person[0]]);
    const xx= [...Users, person];
    console.log(person);
    console.log(Users);
  };

  return (
 

   
 
      <><Add2 addPerson={addPerson}></Add2><List people={Users}></List></>
  

  );
  console.log(1);
}

export default App;
