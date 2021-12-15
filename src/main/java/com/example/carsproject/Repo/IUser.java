package com.example.carsproject.Repo;

import com.example.carsproject.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface IUser extends JpaRepository<User,Long> {
    Optional<User> findUserByIdUser(Long id);
}
