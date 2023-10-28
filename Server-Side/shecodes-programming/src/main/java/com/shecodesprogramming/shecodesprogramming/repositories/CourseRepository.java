package com.shecodesprogramming.shecodesprogramming.repositories;

import com.shecodesprogramming.shecodesprogramming.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShecodesRepository extends JpaRepository<Course, Integer> {
}
