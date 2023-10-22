import './section.css'


export default function Section() {
  return (
    <div className='section'>
      <div style={{textAlign:'center'}}><h2>Join millions of Collaborators</h2></div>
      <div className="container">
        <div className="contain">
            <div className='item'>
            <span>Create A Project</span>
            <p>Join a host of Collaborators by creating a new project, specifying the project name and title and the University you wish to collab with</p>
            </div>
            <div className="img-container">
                <img src="/public/assets/item-1.jpg" alt="" />
            </div>
        </div>
        <div className="contain">
        <div className="img-container">
                <img src="/public/assets/review.jpg" alt="" />
            </div>
            <div style={{paddingLeft:'40px'}} className='item'>
            <span>Send out invites</span>
            <p>Join a host of Collaborators by creating a new project, specifying the project name and title and the University you wish to collab with</p>
            </div>
         
        </div>
        <div className="contain">
            <div className='item'>
            <span>Review Team members</span>
            <p>Join a host of Collaborators by creating a new project, specifying the project name and title and the University you wish to collab with</p>
            </div>
            <div className="img-container">
                <img src="/public/assets/item-1.jpg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
