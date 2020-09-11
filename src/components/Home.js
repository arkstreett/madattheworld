import React from 'react'
import { Link } from 'react-router-dom'
import OldVideo from '../images/UGO.mp4'


function Home() {

    

    return (
        
                
        


        <div className="home-page">
            <video id='myVideo' src={OldVideo} autoPlay loop />
                

            <Link to="/art">Art</Link>

            <Link to="/clothes">
               
                    <h2>GET YA SWAG UP!</h2>
            
                
            </Link>

            <Link to="/about">
                
                    <h2></h2>
            
               
            </Link>   

                 
        </div>
    )
}

export default Home
