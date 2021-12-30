package com.example.carsproject.Exception;

public class CarsNotFoundException extends RuntimeException{
    public CarsNotFoundException(String message){
        super(message);
    }
}
