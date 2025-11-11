package com.jobportal.jobportalbackend.controller;

import com.jobportal.jobportalbackend.entity.JobPosting;
import com.jobportal.jobportalbackend.repository.JobRepository;
import com.jobportal.jobportalbackend.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("${server.baseurl}/jobs")
public class JobController {

    @Autowired
    JobService jobService;

    @Autowired
    JobRepository jobRepository;


    @GetMapping("/all")
    public List<JobPosting> getAllJobs() {
        return jobService.getAll();
    }

    @GetMapping("/{id}")
    public JobPosting getJobById(@PathVariable Long id) {
        return jobService.getById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteJob(@PathVariable Long id) {
        return jobRepository.findById(id).map(job -> {
            jobRepository.delete(job);
            return ResponseEntity.ok().body("Job deleted successfully");
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }



}
