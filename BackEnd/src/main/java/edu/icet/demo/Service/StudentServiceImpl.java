package edu.icet.demo.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.icet.demo.Entity.StudentEntity;
import edu.icet.demo.Model.Student;
import edu.icet.demo.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    StudentRepository repository;

    @Autowired
    ObjectMapper mapper;

    public void createStudent(Student student){

        StudentEntity studentEntity = mapper.convertValue(student, StudentEntity.class);
        repository.save(studentEntity);
    }

    public List<Student> retrive(){

        Iterable<StudentEntity> studentEntities = repository.findAll();
        List<Student> students = new ArrayList<>();

        studentEntities.forEach(student -> {
            if(!student.getIsAvailable().equals("false")){
                students.add(mapper.convertValue(student, Student.class));
            }
        });
        return students;
    }

    public void removeStudent(String nic){
        Optional<StudentEntity> byNic = repository.findByNic(nic);
        byNic.get().setIsAvailable("false");
        repository.save(byNic.get());
    }

    public void updateStudent(String nic, Student student){

        Optional<StudentEntity> studentEntity = repository.findByNic(nic);

        studentEntity.get().setFirstName(student.getFirstName());
        studentEntity.get().setLastName(student.getLastName());
        studentEntity.get().setAge(student.getAge());
        studentEntity.get().setNic(student.getNic());
        studentEntity.get().setSchool(student.getSchool());
        studentEntity.get().setEmail(student.getEmail());
        studentEntity.get().setPhoneNumber(student.getPhoneNumber());

        repository.save(studentEntity.get());

    }

}
