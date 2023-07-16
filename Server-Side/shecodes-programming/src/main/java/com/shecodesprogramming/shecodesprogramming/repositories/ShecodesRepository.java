package com.shecodesprogramming.shecodesprogramming.repositories;

import com.shecodesprogramming.shecodesprogramming.model.coursedata;
import org.springframework.data.jpa.repository.JpaRepository;

public interface shecodesRepository extends JpaRepository<coursedata, Integer> {
}
