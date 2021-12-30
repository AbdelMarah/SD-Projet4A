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
    private String nom;
    private String prenom;
    private String email;
    private String password;
    private String role;
    private String localisation;
    private String phoneNumber;

    @OneToMany(targetEntity = Cars.class)
    private List<Cars> carsList = new ArrayList<>();

    //Page connexion
    public User(String nom, String prenom, String email, String password) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
    }
    //Connexion with a role
    public User(String nom, String prenom, String email, String password,String role) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.role=role;
    }

    public User(String nom, String location, String phoneNumber) {
        this.nom = nom;
        this.localisation = location;
        this.phoneNumber = phoneNumber;
    }

    public User(String nom, String location, String phoneNumber,List<Cars> carsList) {
        this.nom = nom;
        this.localisation = location;
        this.phoneNumber = phoneNumber;
        this.carsList = carsList;
    }

    public List<Cars> getCars(){
        return carsList;
    }
}
