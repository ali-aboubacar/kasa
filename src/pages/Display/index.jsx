import DisplaySection from '../../components/DisplaySection'

import Card from '../../components/Card'

function Display({allPosts}) {

    return (
        <section>
            <DisplaySection/>
            <div className="section_wrap">
                {allPosts.map((post)=>{
                 return <Card key={post.id} singlePost={post}/>
                })}
            </div>
        </section>
    );
  }
  
  export default Display;