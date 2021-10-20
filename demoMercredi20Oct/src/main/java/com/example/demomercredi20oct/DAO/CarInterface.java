package com.example.demomercredi20oct.DAO;

import com.example.demomercredi20oct.entities.Car;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CarInterface extends JpaRepository<Car,Integer> {
}
