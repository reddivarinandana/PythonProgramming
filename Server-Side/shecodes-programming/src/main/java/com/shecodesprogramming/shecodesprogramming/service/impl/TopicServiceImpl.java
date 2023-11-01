package com.shecodesprogramming.shecodesprogramming.service.impl;

import com.shecodesprogramming.shecodesprogramming.model.Topic;
import com.shecodesprogramming.shecodesprogramming.repositories.TopicRepository;
import com.shecodesprogramming.shecodesprogramming.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class TopicServiceImpl implements TopicService{
    @Autowired
    TopicRepository  TopicRepository;
    @Override
    public Topic create(Topic Topic){
        return TopicRepository.save(Topic);
    }
    @Override
    public List<Topic> getAllTopic(){return TopicRepository.findAll();}
    @Override
    public Topic getTopicById(Integer Id){return TopicRepository.findById(Id).get();}
    @Override
    public Topic update(Topic Topic){return TopicRepository.save(Topic);}
    @Override
    public String deleteTopic(Integer id){
        TopicRepository.deleteById(id);
        return "Topic is deleted successfully";
    }
}