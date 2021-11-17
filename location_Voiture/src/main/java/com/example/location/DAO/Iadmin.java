package com.example.location.DAO;

import com.example.location.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Iadmin extends JpaRepository<Admin,Integer> {
}
