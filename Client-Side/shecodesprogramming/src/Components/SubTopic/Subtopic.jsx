import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubTopic } from "../../Redux/Productreducer/action";

function SubTopic() {
    const subtopicData = useSelector((state) => state.subtopic.subtopicData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubTopic());
    }, []);

    return (
        <div>
            <div>
                {subtopicData?.map(({ subTopicName}) => (
                    <div key={subTopicName}>
                        <p>{subTopicName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SubTopic;
