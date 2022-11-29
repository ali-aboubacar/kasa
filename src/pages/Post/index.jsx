import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel';
import Description from '../../components/Description';

function DisplaySinglePost({allPosts}) {
    const [singlePost, setSinglePost] = useState([]);
    const {id} = useParams();
    const getSinglePost = ()=>{
       allPosts.find((post)=>{
            if(post.id === id){
               setSinglePost(post);
            }
            return null
        })   
    }

    useEffect(()=>{
        getSinglePost();
    });
    
    return (
        <section>
            <Carousel slides={singlePost.pictures}/>
            <Description info={singlePost}/>
        </section>
    );
  }
  
  export default DisplaySinglePost;