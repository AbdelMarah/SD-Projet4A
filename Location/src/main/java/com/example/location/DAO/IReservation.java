package com.example.location.DAO;

import com.example.location.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IReservation extends JpaRepository<Reservation,Long> {
}
