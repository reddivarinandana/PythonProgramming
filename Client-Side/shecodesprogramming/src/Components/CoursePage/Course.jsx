// import React, { useState } from "react";
// import './Course.css';
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getTopic } from "../../Redux/Productreducer/action";
// import { useDispatch } from "react-redux";
// import Topic from "../Topicdata/topic";
// import Message from "../Message/Message"

// function Course() {

//     const [clicked, isClicked] = useState(true);

//     const courseData = useSelector(state => state.course.courseData)
//     console.log(courseData)

//     const navigate = useNavigate()
//     const dispatch = useDispatch()
    
//     const displayTopic = async(course_name) => {
//         console.log("test", course_name)
//         if(course_name === "Python") {
//             await dispatch(getTopic())
//             navigate("/course")
//             isClicked(true);
//         }else {
//             isClicked(false);
//         }
//     }

//     return (
//         <div>
            
//             <div className="mainaLayout">
//                 <div className="NAVBAR">
//                     <h1 className="align-left">Learn the ways of the future</h1>
//                     <p className="align-left">With Shecodes, learn Programming with Joy</p>
//                 </div> 
//                 <div className="navbarimage">
//                     <img className="navimage" src="https://kalvium.community/images/livebooks_hero_img.svg" alt="" />
//                 </div>
//             </div>

//             <div className="allData">
//                 <div>
//                     <div className='coursedata'>
//                         <div className='a'>
//                             <div className="courses">
//                             {
//                                 courseData?.map(({course_name }) =>
//                                 <div className='coursediv' key={course_name}>
//                                     <div>
//                                         <h2 id='course'  onClick={() => displayTopic(course_name)} >{course_name}</h2>
//                                     </div>
//                                 </div>
//                                 )
//                             }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                { <div className="TOPIC">
//                     <div>
//                         {clicked ? <div className="Topicdata"> <Topic/> </div> : <div className="Topicdata"><Message/></div>}
//                     </div>
//                 </div>}
//             </div>

//         </div>
//     )
// }

// export default Course;


import React, { useState, useEffect } from "react";
import './Course.css';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTopic } from "../../Redux/Productreducer/action";
import { getSubTopic } from "../../Redux/Productreducer/action";
import Message from "../Message/Message";

function Course() {
    const [clicked, isClicked] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [selectedSubtopic, setSelectedSubtopic] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const courseData = useSelector(state => state.course.courseData);
    const topicData = useSelector(state => state.topic.topicData);
    const subtopicData = useSelector(state => state.subtopic.subtopicData);

    useEffect(() => {
        dispatch(getSubTopic());
    }, [dispatch]);

    const displayTopics = async (course_name) => {
        setSelectedCourse(course_name);
        if(course_name === "Python") {
            await dispatch(getTopic());
            setSelectedTopic(null);
            setSelectedSubtopic(null);
            isClicked(true);
        } else {
            // Display the Message component when a course other than Python is clicked.
            isClicked(false);
        }
    }

    const displaySubtopics = (topicId) => {
        setSelectedTopic(selectedTopic === topicId ? null : topicId);
        setSelectedSubtopic(null);
    }

    const displaySubtopicContent = (subtopicContent) => {
        setSelectedSubtopic(subtopicContent);
    }

    const goBackToTopics = () => {
        setSelectedSubtopic(null);
    }

    return (
        <div>
            {selectedSubtopic ? (
                <div>
                    <button className="backbtn" onClick={goBackToTopics}>Go Back to Topics</button>
                    <div className="null">
                        <div className="content">{selectedSubtopic}</div>
                    </div>
                </div>
            ) : (
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
                                        courseData?.map(({ course_name }) =>
                                        <div className='coursediv' key={course_name}>
                                            <div>
                                                <h2 id='course' onClick={() => displayTopics(course_name)} >{course_name}</h2>
                                            </div>
                                        </div>
                                        )
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="TOPIC">
                            {clicked ? (
                                <div className="Topicdata">
                                    <div className="red">
                                        <div>
                                            {topicData?.map(({ topic_name, id }, topicId) =>
                                                <div key={id} className="css">
                                                    <div className="TopicDetails">
                                                        <p>
                                                            <img className="rhombus" src="/resources/rhomb.png" alt="rhombus" />
                                                        </p>
                                                        <p className={`topic ${selectedTopic === topicId ? 'red-topic' : ''}`} onClick={() => displaySubtopics(topicId)}>
                                                            {topic_name}
                                                        </p>
                                                        <p id="drop">
                                                            <img className="downimage" src="/resources/down.png" alt="dropimage" />
                                                        </p>
                                                        <div>
                                                            {selectedTopic === topicId && (
                                                                <div className="subtopicnames">
                                                                    {subtopicData.filter(subtopic => subtopic.topicId - 1 === topicId)
                                                                        .map(subtopic => (
                                                                            <div className="subTOPICname" key={subtopic.id} onClick={() => displaySubtopicContent(subtopic.subtopicContent)}>
                                                                                {subtopic.subTopicName}
                                                                            </div>
                                                                        ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="Topicdata">
                                    <Message />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Course;
