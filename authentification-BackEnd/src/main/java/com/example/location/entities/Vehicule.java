package com.example.location.entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Data @NoArgsConstructor @AllArgsConstructor @Getter @Setter
@Entity
public class Vehicule implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String marque;
    private String energie;
    private int nbPlaces;
    private int kilometrage;
    private String boiteAvitesse;
    private double currentPrice;
    private boolean promotion;
    //private boolean selected;
    private boolean available;
    private String photoName;
    @ManyToOne
    private  Category category;
    @ManyToOne
    private  Client client;

    public Vehicule(String marque, String energie, int nbPlaces, int kilometrage, String boiteAvitesse) {
        this.marque = marque;
        this.energie = energie;
        this.nbPlaces = nbPlaces;
        this.kilometrage = kilometrage;
        this.boiteAvitesse = boiteAvitesse;
    }
}
