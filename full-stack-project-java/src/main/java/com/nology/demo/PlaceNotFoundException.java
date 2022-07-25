package com.nology.demo;


import javax.persistence.EntityNotFoundException;

public class PlaceNotFoundException extends EntityNotFoundException {
    public PlaceNotFoundException() {
        super("FullStackProject has not been found");
    }
}
