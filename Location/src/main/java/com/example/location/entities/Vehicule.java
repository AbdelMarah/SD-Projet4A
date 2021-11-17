package com.example.location.entities;

import lombok.*;

import javax.persistence.*;

@Data @NoArgsConstructor @AllArgsConstructor @Getter @Setter
@Entity
public class Vehicule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String marque;
    private String energie;
    private int nbPlaces;
    private int kilometrage;
    private String boiteAvitesse;
    @ManyToOne
    private Client client;

    public Vehicule(String marque, String energie, int nbPlaces, int kilometrage, String boiteAvitesse) {
        this.marque = marque;
        this.energie = energie;
        this.nbPlaces = nbPlaces;
        this.kilometrage = kilometrage;
        this.boiteAvitesse = boiteAvitesse;
    }
}
