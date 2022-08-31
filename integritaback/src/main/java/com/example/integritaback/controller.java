package com.example.integritaback;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class controller {

    @GetMapping("/courses")
    public List<Course> getAllCourses(){
        return Arrays.asList(new Course(1, "learn"));
    }
}
