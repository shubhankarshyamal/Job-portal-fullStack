package com.jobportal.jobportalbackend.repository;

import com.jobportal.jobportalbackend.entity.JobPosting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<JobPosting, Long> {}
