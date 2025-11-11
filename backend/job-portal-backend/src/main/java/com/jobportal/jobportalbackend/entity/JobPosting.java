package com.jobportal.jobportalbackend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "job_posting")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobPosting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(length = 150)
    private String company;

    @Column(length = 100)
    private String location;

    @Column(length = 50)
    private String type; // e.g. Full-time, Part-time, Remote, Internship

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(length = 500)
    private String skills; // comma-separated list (e.g. "Java, Spring Boot, AWS")

    @Column(precision = 10, scale = 2)
    private BigDecimal salary;

    @Column(name = "posted_date", nullable = false)
    private LocalDateTime postedDate = LocalDateTime.now();
}
