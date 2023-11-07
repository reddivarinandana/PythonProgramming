package com.shecodesprogramming.shecodesprogramming.model;

import jakarta.persistence.*;


@Entity
@Table(name = "subtopics")

public class SubTopic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sub_topic_id")
    private Long subTopicId;

    @Column(name = "subtopic_name")
    private String subTopicName;

    @Column(name = "topic_id")
    private Long topicId;

    @Column(name = "subtopic_content", length = 16000)
    private String subtopicContent;

    public Long getSubTopicId() {
        return subTopicId;
    }

    public void setSubTopicId(Long subTopicId) {
        this.subTopicId = subTopicId;
    }

    public String getSubTopicName() {
        return subTopicName;
    }

    public void setSubTopicName(String subTopicName) {
        this.subTopicName = subTopicName;
    }

    public Long getTopicId() {
        return topicId;
    }

    public void setTopicId(Long topicId) {
        this.topicId = topicId;
    }
    public String getSubtopicContent() {
        return subtopicContent;
    }
    public void setSubtopicContent(String subtopicContent) {
        this.subtopicContent = subtopicContent;
    }

}

