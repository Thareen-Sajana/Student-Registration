package edu.icet.demo.Service;

import edu.icet.demo.Model.Student;

import java.util.List;

public interface StudentService {

    public void createStudent(Student student);

    public List<Student> retrive();

    public void removeStudent(String nic);

    public void updateStudent(String nic, Student student);
}
