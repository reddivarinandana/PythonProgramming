package com.shecodesprogramming.shecodesprogramming.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Topic {
    @Id
    private int topic_ID;
    private int course_id;

    public int getTopic_ID() {
        return topic_ID;
    }

    public void setTopic_ID(int topic_ID) {
        this.topic_ID = topic_ID;
    }

    public int getCourse_id() {
        return course_id;
    }

    public void setCourse_id(int course_id) {
        this.course_id = course_id;
    }

    public String getTopic_name() {
        return topic_name;
    }

    public void setTopic_name(String topic_name) {
        this.topic_name = topic_name;
    }
    @Column(name = "topic_name")

    private String topic_name;
}
