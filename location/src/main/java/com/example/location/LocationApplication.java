package com.example.location;

import com.example.location.DAO.IClient;
import com.example.location.DAO.IVehicule;
import com.example.location.entities.Client;
import com.example.location.entities.Vehicule;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LocationApplication {

    public static void main(String[] args) {
        SpringApplication.run(LocationApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(IClient iClient , IVehicule iVehicule){
        return args -> {
            iClient.save(new Client("rayane","chaoub",06,"Rue Jean jaures","rayane@gmail.com"));
            iClient.save(new Client("ABDEL","Marah",07,"Rue Jean jaures","rayane@gmail.com"));


            iVehicule.save(new Vehicule("tesla","electrique",5,7200,"auto"));
            iVehicule.save(new Vehicule("ferrari","carburant",2,1000,"auto"));

        };
    }



}