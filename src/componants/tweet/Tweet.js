import React from 'react'
import "./Tweet.css"
import bird from "../../static/1920519_bird_logo_tweet_tweeting_twitter_icon.png"

const Tweet = () => {
  return (
    <div className="tweet-section">
      <div className="tweet">
        <img className='birdy' src={bird} alt="" />
        <h5 className='username'>Kate Adams</h5>
        <p className='message'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nobis officiis ea repellendus doloribus doloremque delectus perferendis.</p>
        <br />
      <span className='tweet-time'>3:42 PM today</span>
      </div>
      
      
   
    </div>
   
    
  );
}

export default Tweet
