import React from "react";
import './homepage.css';

function Homepage(){
    return(
        <div>
            <div className="MainLayout">
                <div className="layout">
                    <div className="sublayout"> 
                        <img className="welcome" src="/resources/welcome.gif" alt="welcome" />
                        <p>Welcome to this amazing place where you can have lots of fun and learn new things! It's a special spot where you'll experience the joy of learning and discover the wonders of magic. Enjoy every moment of your journey here!</p>
                        <p>To begin learning the courses, simply go to Livebooks. It's a platform where you can access educational materials and resources. It's like a virtual library for learning. Once you're there, you'll find a variety of courses and materials to explore and study. It's a great place to start your learning journey and access the knowledge you need. Enjoy your learning experience on Livebooks!</p>
                    </div>

                    <div className="display">
                        <div>
                            <img className="whyimage" src="/resources/whyimage.png" alt="image" />
                        </div>
                        <div className="text-image">
                            <h2>Why SHecodes</h2>
                            <p>In India, 8 lakh students graduate from engineering in every year around 40 lakhs students join some sort of computer science program for a carrier in a computer science.</p>
                            <p>The sad reality is only 6% of them get placed in software companies.</p>
                            <p>The fund problem is lack of programming skills.If programming skills can be taught from a young age we can bridge this gap throughthere are many websites to provide knowledge. </p>
                            <p>There are few websites which bundles knowledge with skill development and most of websites in english.</p>
                            <p>SHecodes is a web targeted towards telugu speaking students. SHecodes aims to empower every telugu medium students to become a solid programmer.</p>
                        </div>
                    </div> 

                    <div className="displaytext">
                        <div className="text">
                            <h2>Programming Languages</h2>
                            <p>Programming languages are used to write code.<br/> Each programming language has its syntax (rules and structure) and semantics (meaning and behavior). <br/>Popular programming languages include Python, Java, C++, JavaScript, and Ruby.</p>
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
                            <h2>How to solve a problem</h2>
                            <p>Programming involves solving problems using logical and algorithmic thinking. Programmers analyze problems, break them down into smaller components, and design algorithms or step-by-step instructions to solve them efficiently.</p>
                        </div>
                    </div>

                    <div className="dsaimage">
                        <div className="dsatext">
                            <h2>What are Data Structures and Algorithms</h2>
                            <p>Data structures are used to organize and store data in a program, while algorithms are the step-by-step procedures used to manipulate that data. Understanding different data structures and algorithms is crucial for efficient programming.</p>
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
                            <h2>what is Object-Oriented Programming (OOP)</h2>
                            <p>OOP is a programming paradigm that organizes code into reusable objects. It focuses on encapsulating data and functions into objects, allowing for modular and scalable code.</p>
                        </div>
                    </div>

                    <div className="displaysldc">
                        <div className="sldctext">
                            <h2>Software Development Life Cycle (SDLC)</h2>
                            <p>Programming is often part of the larger software development process. SDLC encompasses planning, requirements gathering, designing, coding, testing, deployment, and maintenance of software applications.</p>
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
                            <div>
                                <img className="round1" src="/resources/round1.png" alt="roundimage" />
                                <p>Welcome to this amazing place where you can have lots of fun and learn new things! It's a special spot where you'll experience the joy of learning and discover the wonders of magic. Enjoy every moment of your journey here!</p>
                            </div>
                            <div>
                                <img className="round1" src="/resources/round2.png" alt="roundimage" />
                                <p>To begin learning the courses, simply go to Livebooks. It's a platform where you can access educational materials and resources. It's like a virtual library for learning.</p>
                            </div>
                            <div>
                                <img className="round1" src="/resources/round3.png" alt="roundimage" />
                                <p> Once you're there, you'll find a variety of courses and materials to explore and study. It's a great place to start your learning journey and access the knowledge you need. Enjoy your learning experience on Livebooks!</p>
                            </div>
                        </div>

                        <div className="getstarted">
                            <div className="getstarttext">
                                <h2>Ready To Get Started</h2>
                                <p>Signup to explore the SHecodes website and gain programming language.</p>
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