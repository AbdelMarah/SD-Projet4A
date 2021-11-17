package com.example.location;

import com.example.location.DAO.IClient;
import com.example.location.DAO.IReservation;
import com.example.location.DAO.IVehicule;
import com.example.location.entities.Client;
import com.example.location.entities.Reservation;
import com.example.location.entities.Vehicule;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LocationApplication {

    public static void main(String[] args) {
        SpringApplication.run(LocationApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(IClient iClient , IVehicule iVehicule, IReservation iReservation){
        return args -> {
            Vehicule vehicule1 = new Vehicule("tesla","electrique",5,7200,"auto");
            Vehicule vehicule2 =new Vehicule("ferrari","carburant",2,1000,"auto");
            iVehicule.save(vehicule1);
            iVehicule.save(vehicule2);

            Client client1= new Client("rayane","chaoub",06,"Rue Jean jaures","rayane@gmail.com");
            Client client2=new Client("ABDEL","Marah",07,"Charmois","marah@gmail.com");
            iClient.save(client1);
            iClient.save(client2);

            iReservation.save(new Reservation(20,199.90,2020,2021,client1,vehicule1));
            iReservation.save(new Reservation(20,199.90,2020,2021,client2,vehicule1));
            iReservation.save(new Reservation(20,199.90,2020,2021,client1,vehicule2));

        };
    }



}
