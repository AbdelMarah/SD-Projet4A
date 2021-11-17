package com.example.location.web;

import com.example.location.DAO.IVehicule;
import com.example.location.entities.Vehicule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@RestController
@RequestMapping("/location")

public class VehiculeRestControlerAPI {
    @Autowired
    private IVehicule iVehicule;

    @GetMapping(path = "/vehicules",produces={MediaType.APPLICATION_JSON_VALUE})
    public List<Vehicule> vehicleList(){
        return iVehicule.findAll();

    }
    @GetMapping("/vehicules/{id}")
    public Vehicule getOne(@PathVariable(value="id") Long id){
        return iVehicule.findById(id).get();

    }


    @PostMapping(path="/vehicules")
    public Vehicule save(@RequestBody Vehicule vehicule){
        return iVehicule.save(vehicule);
    }


    @PutMapping(path="/vehicules/{id}")
    public Vehicule update(@RequestBody Vehicule vehicule,@PathVariable(value="id") Long id){
        vehicule.setId(id);
        return iVehicule.save(vehicule);
    }

    @DeleteMapping("/vehicules/{id}")
    public void delete(@PathVariable(value="id") Long id){

        iVehicule.deleteById(id);
    }


}
