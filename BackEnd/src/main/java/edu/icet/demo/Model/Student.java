package edu.icet.demo.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Student {
    private String firstName;
    private String lastName;
    private Integer age;
    private String nic;
    private String school;
    private String email;
    private String phoneNumber;
}
