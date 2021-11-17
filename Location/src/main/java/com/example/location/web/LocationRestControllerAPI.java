package com.example.location.web;

import com.example.location.DAO.ILocation;
import com.example.location.entities.Client;
import com.example.location.entities.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/location")
public class LocationRestControllerAPI {
    @Autowired
    private ILocation iLocation;

    @GetMapping(path = "/locations",produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Location> locationList(){
        return iLocation.findAll();
    }

    @GetMapping("/locations/{num_location}")
    public Location getOne(@PathVariable(value = "num_location") Long num_location)
    {
        return iLocation.findById(num_location).get();
    }

    @PostMapping(path="/locations")
    public Location save(@RequestBody Location location){
        return iLocation.save(location);
    }

    @PutMapping(path="/locations/{num_location}")
    public Location update(@RequestBody Location location,@PathVariable Long num_location){
        location.setNum_location(num_location);
        return iLocation.save(location);
    }

    @DeleteMapping("/locations/{num_location}")
    public void delete(@PathVariable(value = "num_location")Long num_location){
        iLocation.deleteById(num_location);
    }



}
