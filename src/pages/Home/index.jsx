import React from 'react'
import Display from '../Display'
import Post from '../Post'
import { Routes,Route} from "react-router-dom";
import { useState, useEffect } from 'react';


function Home() {
    const [allPosts,setAllPosts] = useState([]);
    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setAllPosts(myJson);
          });
      }
      useEffect(()=>{
        getData()
      },[])
  

  return (
      <Routes>
        <Route path="/" element={ <Display allPosts={allPosts}/> } />
        <Route path="/:id" element={ <Post allPosts={allPosts}/> } />
      </Routes>
  );
}

export default Home;
