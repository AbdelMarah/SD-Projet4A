package com.example.carsproject.Service;

import com.example.carsproject.Entities.User;
import com.example.carsproject.Exception.CarsNotFoundException;
import com.example.carsproject.Repo.IUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {

    private final IUser iUser;

    @Autowired
    public UserService(IUser iUser) {
        this.iUser = iUser;
    }
    public User addUser(User user){
        return iUser.save(user);
    }
    public User updateUser(User user){
        return iUser.save(user);
    }
    public List<User> findAllUsers(){
        return iUser.findAll();
    }
    public void deleteUserById(Long id){
        iUser.deleteById(id);
    }
    public User findUserById(Long id){
        return iUser.findUserByIdUser(id).orElseThrow(() -> new CarsNotFoundException("User with id "+id+" was not found"));
    }

}
