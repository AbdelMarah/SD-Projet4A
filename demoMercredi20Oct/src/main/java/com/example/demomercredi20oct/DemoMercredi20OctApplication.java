package com.example.demomercredi20oct;

import com.example.demomercredi20oct.DAO.CarInterface;
import com.example.demomercredi20oct.entities.Car;
import com.example.demomercredi20oct.entities.CarType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoMercredi20OctApplication {


    public static void main(String[] args) {SpringApplication.run(DemoMercredi20OctApplication.class, args);}

    @Bean
    CommandLineRunner runner(CarInterface carInterface){
        return args -> {
            carInterface.save(new Car(1,"Leon",1500, CarType.FUEL));
            carInterface.save(new Car(2,"Cupra",1700,CarType.FUEL));
            carInterface.save(new Car(3,"Tesla",3000,CarType.ELECTRIC));
        };
    }





}
