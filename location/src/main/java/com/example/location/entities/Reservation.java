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
    private Date dateDebut;
    private Date dateRetour;
    @ManyToOne
    private Vehicule vehicule;
    @ManyToOne
    private Client client;



}
