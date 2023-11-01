package com.shecodesprogramming.shecodesprogramming.controllers;

import com.shecodesprogramming.shecodesprogramming.model.SubTopic;
import com.shecodesprogramming.shecodesprogramming.service.SubTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subtopic")
public class SubTopicController {
    private final SubTopicService subTopicService;

    @Autowired
    public SubTopicController(SubTopicService subTopicService) {
        this.subTopicService = subTopicService;
    }

    @PostMapping("/create")
    public SubTopic create(@RequestBody SubTopic subTopic) {
        return subTopicService.create(subTopic);
    }

    @GetMapping("")
    public List<SubTopic> getSubTopics() {
        return subTopicService.getAllSubTopics();
    }

    @GetMapping("/{id}")
    public SubTopic getSubTopic(@PathVariable Long id) {
        return subTopicService.getSubTopicById(id);
    }

    @PutMapping("/update")
    public SubTopic updateSubTopic(@RequestBody SubTopic subTopic) {
        return subTopicService.update(subTopic);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteSubTopic(@PathVariable Long id) {
        return subTopicService.deleteSubTopic(id);
    }
}


