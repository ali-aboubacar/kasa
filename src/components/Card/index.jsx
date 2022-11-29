import { Link } from 'react-router-dom'

function DisplaySection({singlePost}) {
  
    return (
        <Link to= {`/${singlePost.id}`} className="card">
            <span>
            {singlePost.title}
            </span>
        </Link>
    );
  }
  
  export default DisplaySection;