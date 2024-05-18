package edu.icet.demo.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "student")

public class StudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer stdId;

    private String firstName;
    private String lastName;
    private Integer age;
    private String nic;
    private String school;
    private String email;
    private String phoneNumber;
    private String isAvailable = "true";

}
