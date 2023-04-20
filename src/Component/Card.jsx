import React from 'react'
import './card.css'
const Card = () => {
  return (
    <div className='card'>
        <div className="Container">
            <img src='https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?size=626&ext=jpg' alt='logo' className='logo'/>
            <h3 className='name'>Alexandra Caulea</h3>
            <h4 className='about'>I enjoy drinking a cup of every day</h4>
            <div className="followers">
                <div className="posts">
                    <h4 className='post'>172</h4>
                    <h4 className='post'>Posts</h4>
                </div>
                <div className="posts">
                    <h4 className='post'>47</h4>
                    <h4 className='post'>Followers</h4>
                </div>
                <div className="posts">
                    <h4 className='post'>20</h4>
                    <h4 className='post'>Following</h4>
                </div>
                
            </div>
            <div className="but">
                <button className='but1'>FOLLOW</button>
                <button className='but2'>MESSAGE</button>
            </div>
        </div>
    </div>
  )
}

export default Card