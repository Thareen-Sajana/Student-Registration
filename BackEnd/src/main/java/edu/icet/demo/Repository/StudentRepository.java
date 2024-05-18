package edu.icet.demo.Repository;

import edu.icet.demo.Entity.StudentEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Component
public interface StudentRepository extends CrudRepository<StudentEntity,Integer> {

    Optional<StudentEntity> findByNic(String nic);
}
