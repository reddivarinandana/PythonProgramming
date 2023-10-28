package com.shecodesprogramming.shecodesprogramming.service.impl;

import com.shecodesprogramming.shecodesprogramming.model.Course;
import com.shecodesprogramming.shecodesprogramming.repositories.CourseRepository;
import com.shecodesprogramming.shecodesprogramming.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceimpl implements CourseService {

    @Autowired
    CourseRepository CourseRepository;
    @Override
    public Course create(Course Course) {
        return CourseRepository.save(Course);
    }

    @Override
    public List<Course> getAllCourse(){return CourseRepository.findAll();}
    @Override
    public Course getCourseById(Integer id){
        return CourseRepository.findById(id).get();
    }
    @Override
    public  Course update(Course Course){return CourseRepository.save(Course);}
    @Override
    public String deleteCourse(Integer id){
        CourseRepository.deleteById(id);
        return "Course is deleted Successfully";
    }

    @Override
    public List<Course> getSearch(String name) {
        return CourseRepository.getSearch(name);
    }

}
