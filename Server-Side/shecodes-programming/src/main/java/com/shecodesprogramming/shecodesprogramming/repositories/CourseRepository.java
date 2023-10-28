package com.shecodesprogramming.shecodesprogramming.repositories;

import com.shecodesprogramming.shecodesprogramming.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Integer> {
    @Query("select c from Course c where c.course_name like %?1%")
    List<Course> getSearch(String name);
}
