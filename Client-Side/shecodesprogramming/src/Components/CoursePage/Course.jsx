import React, { useState } from "react";
import './Course.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTopic } from "../../Redux/Productreducer/action";
import { useDispatch } from "react-redux";
import Topic from "../Topicdata/topic";

function Course() {

    const courseData = useSelector(state => state.course.courseData)
    console.log(courseData)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const displayTopic = async(selectedCourseData) => {
        await dispatch(getTopic(selectedCourseData.course_id))
        navigate("/course")
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
                            {
                                courseData?.map(({course_id,course_name }) =>
                                <div className='coursediv' key={course_id}>
                                    <div>
                                        <p id='course'  onClick={() => displayTopic(course_id)} >{course_name}</p>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="TOPIC">
                    <div>
                        <div className="Topicdata"> <Topic/> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course;