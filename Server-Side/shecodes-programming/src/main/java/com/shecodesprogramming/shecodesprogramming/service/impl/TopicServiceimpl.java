package com.shecodesprogramming.shecodesprogramming.service.impl;

import com.shecodesprogramming.shecodesprogramming.model.Topic;
import com.shecodesprogramming.shecodesprogramming.repositories.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

import static org.antlr.v4.runtime.tree.xpath.XPath.findAll;

@Service

public class TopicServiceimpl {
    @Autowired
    TopicRepository TopicRepository;
    @Override
    public Topic create(Topicrogramming.shecodesprogramming.service.TopicService; Topic){
        return TopicRepository.save(Topic);
    }
    public List<Topic> getAllTopic(){return TopicRepository.findAll();}

    public Topic getTopicById(Integer id){
        return TopicRepository.findById(id).get();
    }
    public Topic update (Topic Topic){return TopicRepository.save(Topic);}
    public String deleteTopic(@PathVariable Integer id){
        TopicRepository.deleteById(id);
        return "Topic is deleted successfully";
    }
}
