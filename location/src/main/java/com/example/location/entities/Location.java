package com.example.location.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data @NoArgsConstructor @AllArgsConstructor @Getter @Setter
@Entity
public class Location {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int num_location;
    private double prix;
    private Date dateDebut;
    private Date dateRetour;

}
