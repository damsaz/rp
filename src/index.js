import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './components/Welcome';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import App from './App';
import Error404 from './components/Layout/Error404';
import Login from './components/Account/Login';
import Details from './components/Details';
import { CookiesProvider } from 'react-cookie';
const routes =createBrowserRouter([
     {path:"/",
     element:<Welcome />,
     errorElement:<Error404 />,
    // children
} ,
{path:"AddUser",
element:<App />,
} ,
{path:"Details/:id",
element:<Details />,
} ,
{path:"Details",
element:<Details />,
} ,

{path:"Account/Login",
element:<Login/>,
} ,
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"  element={<Welcome />}/>
          <Route path="/AddUser" element={<App />}/>
          <Route path="/Details" element={<Details />}>
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="*" element={<Error404 />} />
          <Route path="Account/Login" element={<Login />} />


          '
        </Routes>
      </Layout>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
