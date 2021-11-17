package com.example.location.web;

import com.example.location.DAO.IClient;
import com.example.location.entities.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/location")
public class ClientRestControllerAPI {
    @Autowired
    private IClient iClient;

    @GetMapping(path = "/clients",produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Client> clientList(){
        return iClient.findAll();
    }

    @GetMapping("/clients/{id}")
    public Client getOne(@PathVariable(value = "id") Long id){
        return iClient.findById(id).get();
    }

    @PostMapping(path="/clients")
    public Client save(@RequestBody Client client){
        return iClient.save(client);
    }

    @PutMapping(path="/clients/{id}")
    public Client update(@RequestBody Client client,@PathVariable Long id){
        client.setId(id);
        return iClient.save(client);
    }

    @DeleteMapping("/clients/{id}")
    public void delete(@PathVariable(value = "id")Long id){
        iClient.deleteById(id);
    }

}
