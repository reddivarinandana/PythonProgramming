import React from "react";
import './topic.css';
import { useSelector } from "react-redux";

function Topic(selectedCourseData){
    const topicData = useSelector(state => state.topic.topicData)
    console.log(topicData)

    return(
        <div>
            <div className="red">
                {
                    topicData?.map(({topic_name})=>
                    <div>
                        <div className="TopicDetails">
                            <p><img className="rhombus" src="/resources/rhomb.png" alt="" /></p>
                            <p className="topic">{topic_name}</p>
                            <p id="drop"><img className="downimage" src="/resources/down.png" alt="" /></p>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Topic