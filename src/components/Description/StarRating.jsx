import { useState,useEffect } from 'react';
import {FaStar} from 'react-icons/fa'

function StarRating({rating} ) {
    const [ratingState,setRatingState] = useState(null);
    const [hover,setHover]= useState(null);

    useEffect(()=>{
        if(!ratingState){
            setRatingState(rating)
        }
    })
    return (
        <div className="ratings">
        {[...Array(5)].map((star,i) => {
            const ratingValue = i + 1 ;
            
            return (
                <label>
                    <input type="radio" name="rating" value={ratingValue} onClick={()=> setRatingState(ratingValue)}/>
                    <FaStar 
                    className='star'
                    color={ratingValue <= (hover || ratingState) ? "#FF6060" : "#E3E3E3"} 
                    onMouseEnter={()=>setHover(ratingValue)} 
                    onMouseLeave={()=>setHover(null)}/>
                </label>
            );
        })}
        
    </div>
    );
  }
  export default StarRating;