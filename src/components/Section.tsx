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
            <p></p>
At Collab-Connect-ED, our mission is to tackle the pressing issues in education, such as the digital divide and learning inequalities. We are dedicated to creating projects that aim to improve education by leveraging technology and collaborative efforts. Through our platform, we strive to be a driving force in transforming education for the better. 
            </div>
         
        </div>
        <div className="contain">
            <div className='item'>
            <span>Review Team members</span>
            <p>Our college feature is designed to streamline location-based connections for students. It enables users to effortlessly discover projects and potential collaborators in proximity to their campus, fostering a sense of community and facilitating local collaboration.</p>
            </div>
            <div className="img-container">
                <img src="/public/assets/item-1.jpg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
