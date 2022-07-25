package com.nology.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PlacesController {

    @Autowired
    PlaceService FullStackProjectService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @PostMapping("/greeting")
    public ResponseEntity<String> createGreeting(@RequestBody Places greeting) {
        FullStackProjectService.createFullStackProject(Places);
        return ResponseEntity.status(HttpStatus.CREATED).body("Created Greeting with ID : " + greeting.getId());
    }




}
