package com.shecodesprogramming.shecodesprogramming.model;

import jakarta.persistence.*;

@Entity
public class Course {
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private int course_id;

    public int getCourse_id() {
        return course_id;
    }

    public void setCourse_id(int course_id) {
        this.course_id = course_id;
    }

    public String getCourse_name() {
        return  course_name;
    }

    public void setCourse_name(String course_name) {
        this.course_name = course_name;
    }

    @Column(name = "course_name")
    private String course_name;
}
