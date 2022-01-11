package com.example.location.web;

import com.example.location.DAO.IVehicule;
import com.example.location.entities.Vehicule;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Paths;

@CrossOrigin("*")
@RestController
public class CatalogueRestController {
    private IVehicule iVehicule;

    public CatalogueRestController(IVehicule iVehicule) {
        this.iVehicule = iVehicule;
    }

    @GetMapping(path="/photoVehicule/{id}",produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getPhoto(@PathVariable("id") Long id) throws Exception{
        Vehicule p=iVehicule.findById(Math.toIntExact(id)).get();
        return Files.readAllBytes(Paths.get(System.getProperty("user.home")+"/ecom/products/"+p.getPhotoName()));
    }
    @PostMapping(path = "/uploadPhoto/{id}")
    public void uploadPhoto(MultipartFile file, @PathVariable Long id) throws Exception{
        Vehicule p=iVehicule.findById(Math.toIntExact(id)).get();
        p.setPhotoName(file.getOriginalFilename());
        Files.write(Paths.get(System.getProperty("user.home")+"/ecom/products/"+p.getPhotoName()),file.getBytes());
        //iVehicule.save(p);
    }
}
