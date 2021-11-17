package com.example.location.entities;

import com.fasterxml.jackson.databind.deser.std.StringArrayDeserializer;
import lombok.*;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Data @NoArgsConstructor @AllArgsConstructor @Getter @Setter
@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String password;
    private int numeroTel;
    private String adresse;
    private String email;
    @OneToMany
    private List<Vehicule> vehiculeList;
    @ManyToOne
    private Reservation reservation;

    public Client(String username, String password, int numeroTel, String adresse, String email) {
        this.username = username;
        this.password = password;
        this.numeroTel = numeroTel;
        this.adresse = adresse;
        this.email = email;
    }



}
