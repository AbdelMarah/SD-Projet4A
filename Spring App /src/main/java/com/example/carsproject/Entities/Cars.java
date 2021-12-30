package com.example.carsproject.Entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Data @NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString
@Entity
public class Cars implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String name;
    private String imageUrl;
    private String energie;
    private int nbPlaces;
    private int kilometrage;
    private String boiteAvitesse;
    private String description;
    @ManyToOne @JoinColumn(name= "idUser")
    private User carOwner;

    public Cars(String name, String imageUrl, String energie, int nbPlaces, int kilometrage, String boiteAvitesse, String description) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.energie = energie;
        this.nbPlaces = nbPlaces;
        this.kilometrage = kilometrage;
        this.boiteAvitesse = boiteAvitesse;
        this.description = description;
    }
}
