package com.shecodesprogramming.shecodesprogramming.repositories;

import com.shecodesprogramming.shecodesprogramming.model.SubTopic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface SubTopicRepository extends JpaRepository<SubTopic, Long> {
    List<SubTopic> findByTopicId(Long topicId);
}
