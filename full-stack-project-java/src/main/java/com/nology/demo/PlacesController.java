package com.nology.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PlacesController {

    @Autowired
    PlacesService placesService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @PostMapping("/place")
    public ResponseEntity<String> createGreeting(@RequestBody Place place) {
        placesService.createPlace(place);
        return ResponseEntity.status(HttpStatus.CREATED).body("Created Greeting with ID : " + place.getId());
    }

    @GetMapping("/place")
    public String getCustomPlace(@RequestParam String name) {
        return "Hello " + name;
    }

    @GetMapping("/place/{id}")
    public ResponseEntity<Place> getPlaceById(@PathVariable String id) {
        Place place = placesService.findPlaceById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(place);
    }

    @GetMapping("/place")
    public ResponseEntity<List<Place>> getPlaces() {
        List<Place> places = placesService.findAllPlaces();
        return ResponseEntity.status(HttpStatus.FOUND).body(places);
    }

//    @GetMapping("/random")
//    public ResponseEntity<Place> getRandomPlace() {
//        Place randomPlace = placesService.getRandomPlace();
//        return ResponseEntity.status(HttpStatus.FOUND).body(randomPlace);
//    }

    @PutMapping("/place/{id}")
    public ResponseEntity<String> updateGreeting(@RequestBody Place newPlace, @PathVariable String id) {
        placesService.updateGreeting(newPlace, id);
        return ResponseEntity.status(HttpStatus.OK).body("Updated Greeting with ID : " + newPlace.getId());
    }
    @DeleteMapping("/place/{id}")
    @Transactional
    public ResponseEntity<String> deletePlaceById(@PathVariable String id) {
        placesService.deleteGreetingById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Place deleted");
    }

}





