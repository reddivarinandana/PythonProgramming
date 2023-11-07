package com.shecodesprogramming.shecodesprogramming.service;

import com.shecodesprogramming.shecodesprogramming.model.SubTopic;

import java.util.List;

public interface SubTopicService {
    SubTopic create(SubTopic subTopic);
    List<SubTopic> getAllSubTopics();
    SubTopic getSubTopicById(Long id);
    SubTopic update(SubTopic subTopic);
    String deleteSubTopic(Long id);
    
}



