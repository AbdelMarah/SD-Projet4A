package com.example.carsproject.Entities;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data @NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long idUser;
    private String username;
    private String localisation;
    private String phoneNumber;

    @OneToMany(targetEntity = Cars.class)
    private List<Cars> carsList = new ArrayList<>();


    public User(String username, String location, String phoneNumber) {
        this.username = username;
        this.localisation = location;
        this.phoneNumber = phoneNumber;
    }

    public User(String username, String location, String phoneNumber,List<Cars> carsList) {
        this.username = username;
        this.localisation = location;
        this.phoneNumber = phoneNumber;
        this.carsList = carsList;
    }

    public List<Cars> getCars(){
        return carsList;
    }
}
