import { useState } from 'react';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'

function DisplayEquipement({desc,equip}) {
    console.log(equip)
    const [showDesc,setShowDesc] = useState(false);
    const [showEquip,setShowEquip] = useState(false);
    return (
        
              <div className="text-block-divider">
                <div className='left'>
               <div className="description">
                <h5>description</h5>
              { !showDesc &&  <BsChevronDown onClick={()=> setShowDesc(true)}/> }
              { showDesc &&  <BsChevronUp onClick={()=> setShowDesc(false)}/> } 
                </div>
                {showDesc && <div className='description-text'><p>{desc}</p></div>}
                </div>
               <div className='right'>
                <div className="equipement">
               <h5>description</h5>
               { !showEquip &&  <BsChevronDown onClick={()=> setShowEquip(true)}/> }
              { showEquip &&  <BsChevronUp onClick={()=> setShowEquip(false)}/> } 
               </div>
               {showEquip && <div className='equipement-li'>{equip.map((item,index)=>{
                return (<li key={index}>{item}</li>)
              })}</div>}
              </div>
              </div>
              

    );
  }
  export default DisplayEquipement;