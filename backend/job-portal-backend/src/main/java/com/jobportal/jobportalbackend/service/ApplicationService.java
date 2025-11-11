package com.jobportal.jobportalbackend.service;

import com.jobportal.jobportalbackend.dto.ApplicationRequest;
import com.jobportal.jobportalbackend.entity.Application;
import com.jobportal.jobportalbackend.entity.JobPosting;
import com.jobportal.jobportalbackend.repository.ApplicationRepository;
import com.jobportal.jobportalbackend.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class ApplicationService {

    @Autowired
    ApplicationRepository applicationRepository;
    @Autowired
    JobRepository jobRepository;

    public Application createApplication(ApplicationRequest request) {
        JobPosting job = jobRepository.findById(request.getJobId())
                .orElseThrow(() -> new RuntimeException("Job not found with ID: " + request.getJobId()));

        Application application = Application.builder()
                .job(job)
                .applicantName(request.getName())
                .email(request.getEmail())
                .resumeUrl(request.getMessage())
                .appliedAt(LocalDateTime.now())
                .build();

        return applicationRepository.save(application);
    }

    public List<Application> getApplicationsByJobId(Long jobId) {
        return applicationRepository.findByJobId(jobId);
    }


}
