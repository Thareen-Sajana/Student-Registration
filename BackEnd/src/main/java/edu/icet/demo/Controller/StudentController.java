package edu.icet.demo.Controller;

import edu.icet.demo.Model.Student;
import edu.icet.demo.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    StudentService service;

    @PostMapping("/studentForm")
    void studentDetails(@RequestBody Student student){
        service.createStudent(student);
    }

    @GetMapping("/studentView")
    List<Student> retrive(){
        return service.retrive();
    }

    @DeleteMapping("/studentRemove/{nic}")
    void removeStudent(@PathVariable String nic){
        service.removeStudent(nic);
    }

    @PatchMapping("/studentUpdate/{nic}")
    void updateStudent(@PathVariable String nic, @RequestBody Student student){
        service.updateStudent(nic, student);
    }
}

