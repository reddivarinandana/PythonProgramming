package com.shecodesprogramming.shecodesprogramming.service.impl;

import com.shecodesprogramming.shecodesprogramming.model.SubTopic;
import com.shecodesprogramming.shecodesprogramming.repositories.SubTopicRepository;
import com.shecodesprogramming.shecodesprogramming.service.SubTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubTopicServiceimpl implements SubTopicService {
    @Autowired
    private SubTopicRepository subTopicRepository;

    @Override
    public SubTopic create(SubTopic subTopic) {
        return subTopicRepository.save(subTopic);
    }

    @Override
    public List<SubTopic> getAllSubTopics() {
        return subTopicRepository.findAll();
    }

    @Override
    public SubTopic getSubTopicById(Long id) {
        return subTopicRepository.findById(id).orElse(null);
    }

    @Override
    public SubTopic update(SubTopic subTopic) {
        return subTopicRepository.save(subTopic);
    }

    @Override
    public String deleteSubTopic(Long id) {
        subTopicRepository.deleteById(id);
        return "SubTopic deleted Successfully";
    }
}
