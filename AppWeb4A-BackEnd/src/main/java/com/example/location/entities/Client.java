package com.example.location.entities;

import com.fasterxml.jackson.databind.deser.std.StringArrayDeserializer;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@NoArgsConstructor @AllArgsConstructor @Getter @Setter
@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idClient;
    private String nom;
    private String prenom;
    private String email;
    private String password;
    private String role = "Client";
    private String ville;
    private long numero;
    private String adresse;

    public Client(String nom, String prenom, String email, String password) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
    }
    public Client(String nom, String prenom, String email, String password, String ville, long numero, String role) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.ville=ville;
        this.numero=numero;
        this.role=role;
    }
    public Client(String nom, String prenom, String email, String password, String ville, long numero) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.ville=ville;
        this.numero=numero;
    }





}
