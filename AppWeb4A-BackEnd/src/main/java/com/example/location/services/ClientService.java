package com.example.location.services;

import com.example.location.entities.Client;
import com.example.location.Exception.CarsNotFoundException;
import com.example.location.DAO.IClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private final IClient iClient;

    @Autowired
    public ClientService(IClient iClient) {
        this.iClient = iClient;
    }

    public Client addUser(Client user){
        return iClient.save(user);
    }
    public Client updateUser(Client user){
        return iClient.save(user);
    }
    public List<Client> findAllUsers(){
        return iClient.findAll();
    }
    public void deleteClientById(Long id){
        iClient.deleteById(id);
    }
    public Client findUserById(Long id){
        return iClient.findClientByIdClient(id).orElseThrow(() -> new CarsNotFoundException("User with id "+id+" was not found"));
    }

}
