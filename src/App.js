import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import UsersList from './components/UsersList';
import List from './components/List';
import AddUser from './components/AddUser';
//import { useCookies } from 'react-cookie';
import UserVeiw from './components/UserVeiw';
import Welcome from './components/Welcome';
import { Route, Routes } from 'react-router-dom';
import Error404 from './components/Layout/Error404';
import Login from './components/Account/Login';
import Details from './components/Details';
import Layout from './components/Layout/Layout';
//const UserContext = React.createContext({ name: '', auth: false });
import UserInfoP from "./components/UserContext";
import { useNavigate } from "react-router-dom";
function App() {
  //const [cookies, setCookie] = useCookies(['cookie-name']);
  const [Users, updateUser] = useState(UsersList);
  const UserI = useContext(UserInfoP)
  const navigate = useNavigate();
  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (UserI.UserName=="") {
   
      return navigate("/Account/Login");
    }
  });
  const addPerson = (person) => {
    updateUser(Users => [...Users, person]);
  
 
   
  };
// eslint-disable-next-line eqeqeq
if(UserI.UserName!="")
  return (
 

   <>   
    
    
   
   <Layout>
       <Routes>
    
    <Route path="/"  element={<Welcome />}/>
    <Route path="/UserVeiw" element={<UserVeiw />}/>
    <Route path="/List" element={<List people={Users}/>}/>
    <Route path="/AddUser" element={<AddUser addPerson={addPerson}/>}/>
    <Route path="/Details" element={<Details />}>
      <Route path=":id" element={<Details />} />
    </Route>
    <Route path="*" element={<Error404 />} />
    <Route path="Account/Login" element={<Login />} />
    </Routes>
    </Layout>
      
    </>
  )
  else
  return (<Layout><Login /></Layout>);

}

export default App;
