package com.nology.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlacesRepository extends JpaRepository <Place, String>{

    Place findByid(String id);

    void deleteByid(String id);

}
