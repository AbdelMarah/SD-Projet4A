package com.example.location.services;

import com.example.location.entities.Vehicule;
import com.example.location.Exception.CarsNotFoundException;
import com.example.location.DAO.IVehicule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
public class CarsService {

    private final IVehicule iCar;

    @Autowired
    public CarsService(IVehicule iCar) {
        this.iCar = iCar;
    }

    public List<Vehicule> findAllCars(){
        return iCar.findAll();
    }

    public Vehicule addCars(Vehicule car){
        return iCar.save(car);
    }

    public Vehicule updateCar(Vehicule car){
        return iCar.save(car);
    }

    public void deleteCar(Long id){
        iCar.deleteById(Math.toIntExact(id));
    }

    public Vehicule findCarById(Long id){
        return iCar.findCarById(id).orElseThrow(()-> new CarsNotFoundException("User with id "+id+" was not found"));
    }

}

