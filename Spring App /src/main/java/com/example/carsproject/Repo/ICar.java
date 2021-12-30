package com.example.carsproject.Repo;

import com.example.carsproject.Entities.Cars;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ICar extends JpaRepository<Cars,Long> {
    void deleteCarsById(Long id);

    Optional<Cars> findCarById(Long id);
}
