

import React, { useState } from 'react';

export default function USer({people}) {

    return(
       
        <>
                
                  
            {people.map((data,key) => {
                return (
                          
                        <Tbody  
                            key={key}
                            id={data.id}
                            FirstName={data.FirstName}
                            SecondName={data.SecondName}
                            Age={data.Age}
                            Nationality={data.Nationality}
                            EmailAdress={data.EmailAdress} />
                    
                );
               
            })}
          
            
        </>


    );
  }


  const Tbody = ({  id,FirstName, SecondName, Age , Nationality,EmailAdress}) => {
    if (!FirstName) return <div />;
    return (

          <tr id={id}>
            <td>
              {FirstName}
            </td>
            <td>
              {SecondName}
            </td>
            <td>
              {Age}
            </td>
            <td>
              {Nationality}
            </td>
            <td>
            {EmailAdress}
            </td>
          </tr>

    );
  };