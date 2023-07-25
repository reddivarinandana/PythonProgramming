import React, { useState } from "react";
import './Course.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTopic } from "../../Redux/Productreducer/action";
import { useDispatch } from "react-redux";
import Topic from "../Topicdata/topic";
import Message from "../Message/Message"

function Course() {

    const [clicked, isClicked] = useState(true);

    const courseData = useSelector(state => state.course.courseData)
    console.log(courseData)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const displayTopic = async(course_name) => {
        console.log("test", course_name)
        if(course_name === "Python") {
            await dispatch(getTopic())
            navigate("/course")
            isClicked(true);
        }else {
            isClicked(false);
        }
    }

    return (
        <div>
            
            <div className="mainaLayout">
                <div className="NAVBAR">
                    <h1 className="align-left">Learn the ways of the future</h1>
                    <p className="align-left">With Shecodes, learn Programming with Joy</p>
                </div> 
                <div className="navbarimage">
                    <img className="navimage" src="https://kalvium.community/images/livebooks_hero_img.svg" alt="" />
                </div>
            </div>

            <div className="allData">
                <div>
                    <div className='coursedata'>
                        <div className='a'>
                            <div className="courses">
                            {
                                courseData?.map(({course_name }) =>
                                <div className='coursediv' key={course_name}>
                                    <div>
                                        <p id='course'  onClick={() => displayTopic(course_name)} >{course_name}</p>
                                    </div>
                                </div>
                                )
                            }
                            </div>
                        </div>
                    </div>
                </div>
               { <div className="TOPIC">
                    <div>
                        {clicked ? <div className="Topicdata"> <Topic/> </div> : <div className="Topicdata"><Message/></div>}
                    </div>
                </div>}
            </div>

        </div>
    )
}

export default Course;