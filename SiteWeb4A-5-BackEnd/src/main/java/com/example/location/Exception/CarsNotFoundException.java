package com.example.location.Exception;

public class CarsNotFoundException extends RuntimeException{
    public CarsNotFoundException(String message){
        super(message);
    }
}
