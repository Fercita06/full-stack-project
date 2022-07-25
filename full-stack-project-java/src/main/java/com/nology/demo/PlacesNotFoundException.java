package com.nology.demo;


import javax.persistence.EntityNotFoundException;

public class PlacesNotFoundException extends EntityNotFoundException {
    public PlacesNotFoundException() {
        super("FullStackProject has not been found");
    }
}
