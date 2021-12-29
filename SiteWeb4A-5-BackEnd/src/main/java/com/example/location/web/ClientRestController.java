package com.example.location.web;

import com.example.location.DAO.IClient;
import com.example.location.entities.Client;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ClientRestController{

    private final IClient iClient;

    public ClientRestController(IClient iClient) {
        this.iClient = iClient;
    }

//    @GetMapping("/client")
//    public List<Client> clientList(){
//        return (List<Client>) iClient.findAll();
//    }

    @GetMapping("/findClients")
    public ResponseEntity<List<Client>> getAllUsers(){
        return new ResponseEntity<>((List<Client>) iClient.findAll(), HttpStatus.OK);
    }

//    @PostMapping("/addClient")
//    void addUser(@RequestBody Client client) {
//        iClient.save(client);
//    }

    @PostMapping("/addClient")
    public ResponseEntity<Client> addUsers(@RequestBody Client client){
        return new ResponseEntity<>(iClient.save(client),HttpStatus.CREATED);
    }
//
//    @PutMapping("/updateUser")
//    public ResponseEntity<User> updateUser(@RequestBody User user){
//        User newUser = userService.updateUser(user);
//        return new ResponseEntity<>(newUser,HttpStatus.CREATED);
//    }
//
//    @PutMapping("/updateUser/{id}")
//    public ResponseEntity<User> updateUserById(@RequestBody User user, @PathVariable("id") Long id){
//        user.setIdUser(id);
//        User newUser = userService.updateUser(user);
//        return new ResponseEntity<>(newUser,HttpStatus.CREATED);
//    }
//
    @DeleteMapping("/deleteClient/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable("id") Long id){
        iClient.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
