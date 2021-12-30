package com.example.carsproject.Service;

import com.example.carsproject.Entities.Cars;
import com.example.carsproject.Exception.CarsNotFoundException;
import com.example.carsproject.Repo.ICar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarsService {
    private final ICar iCar;
    @Autowired
    public CarsService(ICar iCar) {
        this.iCar = iCar;
    }

    public Cars addCars(Cars car){
        return iCar.save(car);
    }

    public Cars updateCar(Cars car){
        return iCar.save(car);
    }

    public List<Cars> findAllCars(){
        return iCar.findAll();
    }

    public void deleteCar(Long id){
         iCar.deleteById(id);
    }

    public Cars findCarById(Long id){
        return iCar.findCarById(id).orElseThrow(()-> new CarsNotFoundException("User with id "+id+" was not found"));
    }

}
