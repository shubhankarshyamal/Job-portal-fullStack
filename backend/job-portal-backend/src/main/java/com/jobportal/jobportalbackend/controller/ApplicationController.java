package com.jobportal.jobportalbackend.controller;

import com.jobportal.jobportalbackend.dto.ApplicationRequest;
import com.jobportal.jobportalbackend.entity.Application;
import com.jobportal.jobportalbackend.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("${server.baseurl}/applications")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class ApplicationController {

    @Autowired
    ApplicationService applicationService;

    @PostMapping("/submit")
    public Application submitApplication(@RequestBody ApplicationRequest request) {
        return applicationService.createApplication(request);
    }

    @GetMapping("/job/{jobId}")
    public List<Application> getApplicationsByJob(@PathVariable Long jobId) {
        return applicationService.getApplicationsByJobId(jobId);
    }
}
