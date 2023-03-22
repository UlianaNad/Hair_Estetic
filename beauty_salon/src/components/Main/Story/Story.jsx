import React from "react";
import '../../../App.css';


const Story = () =>{
    return(
       <div>
        <div id="story" className="story-block">
                <div className="white-backgr">
                    <div className="text-story">
                        <h4>Our story</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error in eos repellat doloremque voluptatem sed optio officiis iure rem nam molestiae nisi, nesciunt eveniet dolorum corrupti saepe cumque, cum exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio placeat tempora temporibus nesciunt corporis accusamus sint architecto est. Tempore autem provident placeat molestias ratione officia quia fugit illum consequuntur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio placeat tempora temporibus nesciunt corporis accusamus sint architecto est. Tempore autem provident placeat molestias ratione officia quia fugit illum consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio placeat tempora temporibus nesciunt corporis accusamus sint architecto est. Tempore autem provident placeat molestias ratione officia quia fugit illum consequuntur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error in eos repellat doloremque voluptatem sed optio officiis iure rem nam molestiae nisi, nesciunt eveniet dolorum corrupti saepe cumque, cum exercitationem.</p>
                        
                    </div>
                </div>
            </div>
            <div id="" className="wrapper">
                <h3>team experts</h3>
                <h5>Meet the crew that makes wonders happen</h5>
                <div className="crew-wrapper">
                <div className="card-crew">
                    <div className="photo-card1">
                    <div className="info-card">
                        <h6>Eve Foster</h6>
                        <div className="link-block">
                        <a href='#'><img src={require("../../img/facebook.png")} className="icon"/></a>
                        <a href='#'><img src={require("../../img/instagram.png")} className="icon"/></a>
                        <a href='#'><img src={require("../../img/whatsapp.png")} className="icon"/></a>
                        </div>
                    </div>
                    </div>

                    <div className="photo-card2">
                    <div className="info-card">
                        <h6>Roosa Bill</h6>
                        <div className="link-block">
                        <a href='#'><img src={require("../../img/facebook.png")} className="icon"/></a>
                        <a href='#'><img src={require("../../img/instagram.png")} className="icon"/></a>
                        <a href='#'><img src={require("../../img/whatsapp.png")} className="icon"/></a>
                        </div>
                    </div>
                    </div>

                    <div className="photo-card3">
                    <div className="info-card">
                        <h6>Klara Berk</h6>
                        <div className="link-block">
                        <a href='#'><img src={require("../../img/facebook.png")} className="icon"/></a>
                        <a href='#'><img src={require("../../img/instagram.png")} className="icon"/></a>
                        <a href='#'><img src={require("../../img/whatsapp.png")} className="icon"/></a>
                        </div>
                    </div>
                    </div>

                    <div className="photo-card4">
                    <div className="info-card">
                        <h6>Judy Claim</h6>
                        <div className="link-block">
                        <a href='#'><img src={require("../../img/facebook.png")} className="icon"/></a>
                        <a href='#'><img src={require("../../img/instagram.png")} className="icon"/></a>
                        <a href='#'><img src={require("../../img/whatsapp.png")} className="icon"/></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
       </div>
    )
}

export default Story;