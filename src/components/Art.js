import React from 'react';
import YungLean from '../images/image0.png'
import Future from '../images/image1.png'
import Drakeo from '../images/image2.png'
import PostMalone from '../images/image3.png'
import Thugger from '../images/image4.png'
import Frank from '../images/image5.png'
import Dugg from '../images/image6.png'
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction'
import NavBar from './Navbar'

// NEW POSTERS 

import Brent from '../images/brentfaiyazposter.png'
import Uzi from '../images/uziposter.jpg'
import Juice from '../images/juicewrldposter.jpg'
import Carti from '../images/cartiposter.jpg'
import Pharrel from '../images/pharrelposter.jpg'
import Peep from '../images/peepposter.jpg'









const Art = (props) => {
    console.log(props);


    return (
   

    <div>
         {/* <NavBar/> */}
        <div className="container">
            
            <div className="image">
                <img src={YungLean} alt="A poster of Yung Lean in his element" />
                <h3>Yung Lean Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('YungLeanPoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div> 

            <div className="image">
                <img src={Future} alt="Future Hendrix poster" />
                <h3>Purple Reign Future Hendrixx Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('FuturePoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div> 

            <div className="image">
                <img src={Drakeo} alt="Free the ruler Drakeo poster" />
                <h3>Drakeo the Ruler Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('DrakeoPoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div> 

            <div className="image">
                <img src={PostMalone} alt="Evil Post Malone poster" />
                <h3>Evil Post Malone Poster</h3>
                <h3>$35.00</h3>
                <a onClick={() => props.addBasket('PostPoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div> 

            <div className="image">
                <img src={Thugger} alt="Trippy Young Thug Poster" />
                <h3>Young Thug Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('ThugPoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div> 

            <div className="image">
                <img src={Frank} alt="Sad/Evil Frank Ocean" />
                <h3>Bi-polar Frank Ocean Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('FrankPoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div> 

            <div className="image">
                <img src={Dugg} alt="42 Dugg Counting Money Poster" />
                <h3>42 Dugg Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('DuggPoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div> 

            <div className="image">
                <img src={Brent} alt="Brent Faiyaz Poster" style={{ width: '800px'}} />
                <h3>Brent Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('BrentPoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div>

            <div className="image">
                <img src={Uzi} alt="Lil Uzi Vert Poster" style={{ width: '800px'}} />
                <h3>Lil Uzi Vert Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('UziPoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div>








            <div className="image">
                <img src={Carti} alt="Playboicarti Poster" style={{ width: '800px'}} />
                <h3>Cartier Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('CartiPoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div>

            <div className="image">
                <img src={Peep} alt="Lil Peep Poster" style={{ width: '800px'}} />
                <h3>Lil Peep Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('PeepPoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div>

            <div className="image">
                <img src={Juice} alt="Juice WRLD Poster" style={{ width: '800px'}} />
                <h3>Juice WRLD Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('JuicePoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div>

            <div className="image">
                <img src={Pharrel} alt="Brent Faiyaz Poster" style={{ width: '800px'}} />
                <h3>Pharrel Poster</h3>
                <h3>$40.00</h3>
                <a onClick={() => props.addBasket('PharrellPoster')} className="addToCart" href="#">Add to Cart <ion-icon name="add-circle-outline" style={{ height: "13px"}}></ion-icon></a>
            </div>

            

           
        </div>

        <div>
            <footer className="footer">
                <h3>Mad at The World© 2020</h3>
            </footer>
        </div>
    </div>
    );
}

export default connect(null, { addBasket })(Art);