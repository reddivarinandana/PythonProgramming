import React, { useState } from "react";
import './Course.css';
import { useSelector } from "react-redux";

function Course() {

    const courseData = useSelector(state => state.course.courseData)

    console.log(courseData)
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

            <div className='coursedata'>
                <div className='a'>
                    {
                        courseData?.map(({ course_name }) =>
                            <div className='coursediv'>
                                <div id='course'>
                                    <p className="coursetext" id='course'>{course_name}</p>
                                    </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Course;