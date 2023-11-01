package com.shecodesprogramming.shecodesprogramming.repositories;

import com.shecodesprogramming.shecodesprogramming.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopicRepository extends JpaRepository<Topic, Integer> {
}
