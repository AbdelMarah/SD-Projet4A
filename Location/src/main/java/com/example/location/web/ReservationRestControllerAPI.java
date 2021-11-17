package com.example.location.web;

import com.example.location.DAO.IReservation;
import com.example.location.entities.Location;
import com.example.location.entities.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/location")
public class ReservationRestControllerAPI {
    @Autowired
    private IReservation iReservation;

    @GetMapping(path = "/reservations",produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Reservation> reservationList(){
        return iReservation.findAll();
    }

    @GetMapping("/locations/{num_reservation}")
    public Reservation getOne(@PathVariable(value = "num_reservation") Long num_reservation)
    {
        return iReservation.findById(num_reservation).get();
    }

    @PostMapping(path="/Reservations")
    public Reservation save(@RequestBody Reservation reservation){
        return iReservation.save(reservation);
    }

    @PutMapping(path="/locations/{num_reservation}")
    public Reservation update(@RequestBody Reservation reservation,@PathVariable Long num_reservation){
        reservation.setNum_reservation(num_reservation);
        return iReservation.save(reservation);
    }

    @DeleteMapping("/reservations/{num_reservation}")
    public void delete(@PathVariable(value = "num_reservation")Long num_location){
        iReservation.deleteById(num_location);
    }
}
