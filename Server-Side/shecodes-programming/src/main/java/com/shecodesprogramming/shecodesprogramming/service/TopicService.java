package com.shecodesprogramming.shecodesprogramming.service;

import com.shecodesprogramming.shecodesprogramming.model.Topic;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public interface TopicService {
    public Topic create(Topic topic);

    public List<Topic> getAllTopic();

    public Topic getTopicById(Integer id);

    public Topic update(Topic topic);

    String deleteTopic(Integer id);
}
