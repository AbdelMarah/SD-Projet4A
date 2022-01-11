package com.example.location.web;

import com.example.location.DAO.IClient;
import com.example.location.DAO.IVehicule;
import com.example.location.entities.Client;
import com.example.location.entities.Vehicule;
import com.example.location.services.CarsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
//@RequestMapping("/Cars")
public class CarRestController {

    private final CarsService carsService;

    public CarRestController(CarsService carsService, IVehicule iVehicule) {
        this.carsService = carsService;
    }

    //returns an http response
    @GetMapping("/findAllCars")
    public ResponseEntity<List<Vehicule>> getAllCars(){
        return new ResponseEntity<>(carsService.findAllCars(), HttpStatus.OK);
    }

    @GetMapping("/findAllCars/{id}")
    public ResponseEntity<Vehicule> getCarById(@PathVariable("id") Long id){
        return new ResponseEntity<>(carsService.findCarById(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Vehicule> addCar(@RequestBody Vehicule car){
        return new ResponseEntity<>(carsService.addCars(car),HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Vehicule> updateCar(@RequestBody Vehicule cars){
        return new ResponseEntity<>(carsService.updateCar(cars),HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCar(@PathVariable("id") Long id){
        carsService.deleteCar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }




}

