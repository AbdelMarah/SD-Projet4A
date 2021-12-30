package com.example.carsproject.Controler;

import com.example.carsproject.Entities.Cars;
import com.example.carsproject.Service.CarsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Cars")
public class CarController {

    private final CarsService carsService;

    public CarController(CarsService carsService) {
        this.carsService = carsService;
    }

    //returns an http response
    @GetMapping("/findAllCars")
    public ResponseEntity<List<Cars>> getAllCars(){
        List<Cars> Cars = carsService.findAllCars();
        return new ResponseEntity<>(Cars, HttpStatus.OK);
    }

    @GetMapping("/findAllCars/{id}")
    public ResponseEntity<Cars> getCarById(@PathVariable("id") Long id){
        Cars car = carsService.findCarById(id);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Cars> addCars(@RequestBody Cars cars){
        Cars newcar = carsService.addCars(cars);
        return new ResponseEntity<>(newcar,HttpStatus.CREATED);
    }

//    @PostMapping(path = "/addcar")
//    public Cars save(@RequestBody Cars car){
//        return  carsService.addCars(car);
//    }

    @PutMapping("/update")
    public ResponseEntity<Cars> updateCars(@RequestBody Cars cars){
        Cars newcar = carsService.updateCar(cars);
        return new ResponseEntity<>(newcar,HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Cars> update(@RequestBody Cars cars, @PathVariable("id") Long id){
        cars.setId(id);
        Cars newcar = carsService.updateCar(cars);
        return new ResponseEntity<>(newcar,HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCar(@PathVariable("id") Long id){
        carsService.deleteCar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }




}
