package com.example.location.DAO;

import com.example.location.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClient extends JpaRepository<Client,Long> {
}
