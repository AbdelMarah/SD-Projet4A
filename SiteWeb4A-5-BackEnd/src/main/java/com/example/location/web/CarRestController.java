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
    private final IVehicule iVehicule;

    public CarRestController(CarsService carsService, IVehicule iVehicule) {
        this.carsService = carsService;
        this.iVehicule = iVehicule;
    }

    //returns an http response
    @GetMapping("/findAllCars")
    public ResponseEntity<List<Vehicule>> getAllCars(){
        //List<Vehicule> Cars = carsService.findAllCars();
        return new ResponseEntity<>((List<Vehicule>) iVehicule.findAll(), HttpStatus.OK);
    }

    @GetMapping("/findAllCars/{id}")
    public ResponseEntity<Vehicule> getCarById(@PathVariable("id") Long id){
        Vehicule car = carsService.findCarById(id);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Vehicule> addCars(@RequestBody Vehicule car){
        Vehicule newcar = carsService.addCars(car);
        return new ResponseEntity<>(newcar,HttpStatus.CREATED);
    }

//    @PostMapping(path = "/addcar")
//    public Cars save(@RequestBody Cars car){
//        return  carsService.addCars(car);
//    }

    @PutMapping("/update")
    public ResponseEntity<Vehicule> updateCars(@RequestBody Vehicule cars){
        Vehicule newcar = carsService.updateCar(cars);
        return new ResponseEntity<>(newcar,HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Vehicule> update(@RequestBody Vehicule cars, @PathVariable("id") Long id){
        cars.setId(Math.toIntExact(id));
        Vehicule newcar = carsService.updateCar(cars);
        return new ResponseEntity<>(newcar,HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCar(@PathVariable("id") Long id){
        carsService.deleteCar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }




}

