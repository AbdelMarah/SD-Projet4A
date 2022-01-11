package com.example.location.web;

import com.example.location.DAO.IClient;
import com.example.location.entities.Client;
import com.example.location.services.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ClientRestController{
    private final ClientService clientService;

    public ClientRestController(IClient iClient, ClientService clientService) {
        this.clientService=clientService;
    }

//    @GetMapping("/client")
//    public List<Client> clientList(){
//        return (List<Client>) iClient.findAll();
//    }

    @GetMapping("/findClients")
    public ResponseEntity<List<Client>> getAllUsers(){
        return new ResponseEntity<>((List<Client>) clientService.findAllUsers(), HttpStatus.OK);
    }

//    @PostMapping("/addClient")
//    void addUser(@RequestBody Client client) {
//        iClient.save(client);
//    }

    @PostMapping("/addClient")
    public ResponseEntity<Client> addUsers(@RequestBody Client client){
        return new ResponseEntity<>(clientService.addUser(client),HttpStatus.CREATED);
    }

    @PutMapping("/updateUser")
    public ResponseEntity<Client> updateUser(@RequestBody Client user){
        return new ResponseEntity<>(clientService.updateUser(user),HttpStatus.CREATED);
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<Client> updateUserById(@RequestBody Client user, @PathVariable("id") Long id){
        user.setIdClient(id);
        return new ResponseEntity<>(clientService.updateUser(user),HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteClient/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable("id") Long id){
        clientService.deleteClientById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
