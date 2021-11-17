package com.example.location.DAO;

import com.example.location.entities.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IVehicule extends JpaRepository<Vehicule,Integer> {
}
