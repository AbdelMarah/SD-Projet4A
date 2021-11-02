package com.example.location.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Collection;

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
    @OneToMany()
    private Collection<Vehicule> vehiculeCollection;

    public Client(String username, String password, int numeroTel, String adresse, String email) {
        this.username = username;
        this.password = password;
        this.numeroTel = numeroTel;
        this.adresse = adresse;
        this.email = email;
    }

}
