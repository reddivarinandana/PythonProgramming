package com.shecodesprogramming.shecodesprogramming.controllers;

import com.shecodesprogramming.shecodesprogramming.model.Topic;
import com.shecodesprogramming.shecodesprogramming.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Topic")

public class TopicController {
    @Autowired
    TopicService TopicService;
    @PostMapping("/topicCreate")
    public Topic create(@RequestBody Topic Topic){return TopicService.create(Topic);}
    @GetMapping("")
    public List<Topic> getTopic(){return TopicService.getAllTopic();}
    @GetMapping("/{id}")
    public Topic getTopic(@PathVariable Integer id){return TopicService.getTopicById(id);}
    @PutMapping("/update")
    public Topic updateTopic(@RequestBody Topic Topic){return TopicService.update(Topic);}
    @PutMapping("/delete/{id}")
    public String deleteTopic(@PathVariable Integer id){return TopicService.deleteTopic(id);}

}
