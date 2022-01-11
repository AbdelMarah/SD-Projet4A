package com.example.location.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Category implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCategory;
    private String name;
    private String photo;

    @OneToMany(mappedBy = "category")
    private Collection<Vehicule> vehicules;

    public Category(String name, String photo) {
        this.name = name;
        this.photo = photo;
    }
}
