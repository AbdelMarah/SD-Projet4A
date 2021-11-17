package com.example.location.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data @NoArgsConstructor @AllArgsConstructor @Getter @Setter
@Entity
public class Reservation {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int num_reservation;
    private double prix;
    private int dateDebut;
    private int dateRetour;
    @ManyToOne
    private Vehicule vehicule;
    @ManyToOne
    private Client client;

    public Reservation(int num_reservation, double prix, int dateDebut, int dateRetour, Client client1, Vehicule vehicule1) {
        this.num_reservation = num_reservation;
        this.prix = prix;
        this.dateDebut = dateDebut;
        this.dateRetour = dateRetour;
        this.vehicule=vehicule1;
        this.client=client1;
    }

}
