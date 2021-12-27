package com.example.location.DAO;

import com.example.location.entities.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@RepositoryRestResource
public interface IVehicule extends JpaRepository<Vehicule,Integer> {

    @RestResource(path = "/vehiculesByKeyword")
    public List<Vehicule> findByMarqueContains(@Param("mc") String mc);
    @RestResource(path = "/promoVehicules")
    public List<Vehicule> findByPromotionIsTrue();
    @RestResource(path = "/dispoVehicules")
    public List<Vehicule> findByAvailableIsTrue();
}
