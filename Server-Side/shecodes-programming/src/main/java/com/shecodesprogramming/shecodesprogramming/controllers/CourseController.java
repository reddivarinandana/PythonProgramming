package com.shecodesprogramming.shecodesprogramming.controllers;

import com.shecodesprogramming.shecodesprogramming.model.Course;
import com.shecodesprogramming.shecodesprogramming.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/course")
public class CourseController {
    @Autowired
    CourseService CourseService;
    @PostMapping("/create")
    public Course create (@RequestBody Course Course){return CourseService.create(Course);}

    @GetMapping("")
    public List<Course> getCourse(){return (List<Course>) CourseService.getAllCourse();}

    @GetMapping("/{id}")
    public Course getCourse(@PathVariable Integer id){return CourseService.getCourseById(id);}

    @PutMapping("/update")
    public Course updateCourse(@RequestBody Course Course){return CourseService.update(Course);}

    @DeleteMapping("/delete/{id}")
    public String deleteCourse(@PathVariable Integer id){return CourseService.deleteCourse(id);}
    @GetMapping("/search")

    public List<Course> getSearch(@RequestParam("query") String name){
        return CourseService.getSearch(name);
    }
}
