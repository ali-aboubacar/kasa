import DisplayEquipement from "./Equipement";
import Profile from "./profile";
import StarRating from "./StarRating";

function DisplayDescription({info}) {
    const singlePost = info;
    return (
        <div className="description-component">
            <div className="description-header">
                <div className="description-title">
                    <h1>{singlePost.title}</h1>
                    <h5>{singlePost.location}</h5>
                </div>
                <div className="description-profile">
                    <Profile host ={info.host}/>
                </div>
            </div>
            <div className="tags-and-ratings">
                <div className="tags">
                {singlePost.tags?.map((tag,index)=>{
                        return (<div key={index}>{tag}</div>)
                    })}
                </div>
                <StarRating rating={singlePost.rating}/>
            </div>
            <DisplayEquipement desc={singlePost.description} equip={singlePost.equipments}/>
        </div>
    );
  }
  export default DisplayDescription;