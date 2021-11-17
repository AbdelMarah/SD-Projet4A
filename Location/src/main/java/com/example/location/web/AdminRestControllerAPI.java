package com.example.location.web;


import com.example.location.DAO.Iadmin;
import com.example.location.entities.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/location")
public class AdminRestControllerAPI {
    @Autowired
    private Iadmin iadmin;

    @GetMapping(path="/admins")
    public List<Admin> adminList(){
       return iadmin.findAll();
    }
}
