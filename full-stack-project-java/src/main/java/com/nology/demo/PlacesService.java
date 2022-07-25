package com.nology.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class PlacesService {
    @Autowired
    PlacesRepository placesRepository;
    public void createPlace(Place place) { placesRepository.save(place);}

    Place findPlaceById(String id){
        Place place = placesRepository.findByid(id);

        if(place == null){
            throw new PlaceNotFoundException();
        }

        return place;
    }

//    public Place getRandomPlace() {
//        List<Place> greetings = placesRepository.findAll();
//        Random rand = new Random();
//        return place.get(rand.nextInt(place.size()));
//    }

    public List<String> extractPlacesIds() {
        List<Place> places = placesRepository.findAll();

        return places.stream()
                .map(Place::getId)
                .collect(Collectors.toList());
    }

    public List<Place> findAllPlaces() {
        return placesRepository.findAll();
    }

    public void updateGreeting(Place newPlace, String id) {
        findPlaceById(id);
        placesRepository.save(newPlace);
    }

    void deleteGreetingById(String id){
        findPlaceById(id);
        placesRepository.deleteByid(id);
    }
}



