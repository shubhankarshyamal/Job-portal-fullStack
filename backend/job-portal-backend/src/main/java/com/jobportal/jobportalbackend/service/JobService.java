package com.jobportal.jobportalbackend.service;

import com.jobportal.jobportalbackend.entity.JobPosting;
import com.jobportal.jobportalbackend.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor  // Lombok: auto-generates constructor for final fields
public class JobService {

    private final JobRepository repo;

    public List<JobPosting> getAll() {
        return repo.findAll();
    }

    public JobPosting getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));
    }

    public JobPosting create(JobPosting job) {
        return repo.save(job);
    }

    public JobPosting update(Long id, JobPosting job) {
        JobPosting existing = getById(id);
        existing.setTitle(job.getTitle());
        existing.setDescription(job.getDescription());
        existing.setLocation(job.getLocation());
        existing.setSalary(job.getSalary());
        existing.setPostedDate(job.getPostedDate());
        return repo.save(existing);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
