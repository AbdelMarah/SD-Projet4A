package com.example.location.DAO;

import com.example.location.entities.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILocation extends JpaRepository<Location,Long> {
}
