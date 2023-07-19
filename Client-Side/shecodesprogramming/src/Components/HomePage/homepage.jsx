import React from "react";
import './homepage.css';
import { DsaText, GetStart, HomeSubContent, ImageSources, OopText, ProblemText, Programming, SHecodes, SldcImage } from "../Constant/homepageconstant";

function Homepage(){
    return(
        <div>
            <div className="MainLayout">
                <div className="layout">
                    <div className="sublayout"> 
                        <img className="welcome" src="/resources/welcome.gif" alt="welcome" />
                        {
                            HomeSubContent.map((element, i) => 
                            <p key={i}>{element}</p>)
                        }
                    </div>

                    <div className="display">
                        <div>
                            <img className="whyimage" src="/resources/whyimage.png" alt="image" />
                        </div>
                        <div className="text-image">
                            <h2>{SHecodes.heading}</h2>
                            {
                                SHecodes.data.map((item, i) =>(
                                    <p key={i}>{item}</p>
                                ))
                            }
                        </div>
                    </div> 

                    <div className="displaytext">
                        <div className="text">
                            <h2>{Programming.head}</h2>
                            {
                                Programming.datum.map((element, index) =>(
                                    <p key={index}>{element}</p>
                                ))
                            }
                           </div>
                        <div>
                            <img className="programming" src="/resources/programming.jpg" alt="programming" />
                        </div>
                    </div>

                    <div className="displaytext">
                        <div>
                            <img className="displayimage" src="/resources/displayimage.png" alt="problem" />
                        </div>
                        <div className="problem">
                            <h2>{ProblemText.headding}</h2>
                            {
                                ProblemText.datums.map((element, index) =>(
                                    <p key={index}>{element}</p>
                                ))
                            }
                            </div>
                    </div>

                    <div className="dsaimage">
                        <div className="dsatext">

                            <h2>{DsaText.headpart}</h2>
                            {
                                DsaText.dataa.map((element, index) =>(
                                    <p key={index}>{element}</p>
                                ))
                            }

                            
                            </div>
                        <div>
                            <img className="dsaImage" src="/resources/dsaimage.jpg" alt="dsaimage" />
                        </div>
                    </div>

                    <div className="displayoop">
                        <div>
                            <img className="oopimage" src="/resources/oopimage.jpeg" alt="oopimage" />   
                        </div>
                        <div className="ooptext">
                            <h2>{OopText.headdingpart}</h2>
                            {
                                OopText.data.map((element, index) =>(
                                    <p key={index}>{element}</p>
                                ))
                            }
                        
                            </div>
                    </div>

                    <div className="displaysldc">
                        <div className="sldctext">
                            <h2>{SldcImage.head}</h2>
                            {
                                SldcImage.data.map((element, index) =>(
                                    <p key={index}>{element}</p>
                                ))
                            }
                           </div>
                        <div>
                            <img className="displaysldcimage" src="/resources/displaysldcimage.webp" alt="displayimage" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>
                                <h2>Learn With Joy</h2>
                            </div>
                        </div>
                        <div className="roundimages">
                           {
                                ImageSources.map((element,index)=>(
                                    <div key={index}>
                                        <img className="round1" src={element.imageLink} alt={element.altText}/>
                                        <p>{element.content}</p>
                                    </div>
                                ))
                           }
                        </div>

                        <div className="getstarted">
                            <div className="getstarttext">

                                <h2>{GetStart.head}</h2>
                            {
                                GetStart.data.map((element, index) =>(
                                    <p key={index}>{element}</p>
                                ))
                            }
                                 <button>Signup</button>
                            </div>
                            <div>
                                <img className="getstartimage" src="/resources/getstarted.png" alt="getstartimage" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage