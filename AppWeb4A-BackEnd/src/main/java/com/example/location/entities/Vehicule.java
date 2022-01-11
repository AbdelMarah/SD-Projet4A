package com.example.location.entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Data @NoArgsConstructor @AllArgsConstructor @Getter @Setter
@Entity
public class Vehicule{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String marque;
    private String energie;
    private int nbPlaces;
    private int kilometrage;
    private String boiteAvitesse;
    private String moteurCapacite;
    private double puissance;
    private double currentPrice;
    private String ville;
    private String photoName;
    @ManyToOne @JoinColumn(name= "idClient", referencedColumnName="idClient", nullable = true)
    private  Client client;
    @ManyToOne @JoinColumn(name= "idCategory", nullable = true)
    private  Category category;

}
