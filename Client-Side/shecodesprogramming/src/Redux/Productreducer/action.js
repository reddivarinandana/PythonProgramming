
// export function getAllCourse(){
    
// }
import{
    GET_ALL_COURSE_REQUEST,
    GET_ALL_COURSE_FAILURE,
    GET_ALL_COURSE_SUCCESS, 

    GET_ALL_TOPIC_REQUEST,
    GET_ALL_TOPIC_FAILURE,
    GET_ALL_TOPIC_SUCCESS, 

  } from "./actiontype";
  
  import axios from "axios";
  
  export const getAllCourseRequest = () => ({
    type: GET_ALL_COURSE_REQUEST,
  });
  
  export const getAllCourseFailure = () => ({
    type:  GET_ALL_COURSE_FAILURE,
  });
  
  export const getAllCourseSuccess = (payload) => ({
    type: GET_ALL_COURSE_SUCCESS,
    payload,
  });
  
  export const getAllcourse = () => (dispatch) => {
    dispatch(getAllCourseRequest());
    axios
      .get("http://localhost:8080/course")
      .then((res) => dispatch(getAllCourseSuccess(res.data)))
      .catch(() => dispatch(getAllCourseFailure()));
  };
  
  export const getTopicDataRequest = () => ({
    type: GET_ALL_TOPIC_REQUEST
  })
  
  export const getTopicDataFailure = () => ({
    type: GET_ALL_TOPIC_FAILURE
  })
  
  export const getTopicDataSuccess = (payload) => ({
    type: GET_ALL_TOPIC_SUCCESS,
    payload
  })
  
  export const getTopic = () => (dispatch) => {
    dispatch(getTopicDataRequest())
    axios
    .get("http://localhost:8080/Topic")
    .then((res) => dispatch(getTopicDataSuccess(res.data)))
    .catch(() => dispatch(getTopicDataFailure()));
  }
  