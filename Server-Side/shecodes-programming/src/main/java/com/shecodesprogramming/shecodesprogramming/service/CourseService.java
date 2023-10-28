package com.shecodesprogramming.shecodesprogramming.service;

import com.shecodesprogramming.shecodesprogramming.model.Course;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CourseService {
    public Course create(Course Course);

    public List<Course> getAllCourse();

    public Course getCourseById(Integer id);

    public Course update(Course course);

    public String deleteCourse(Integer id);
    public List<Course> getSearch(String name);

}