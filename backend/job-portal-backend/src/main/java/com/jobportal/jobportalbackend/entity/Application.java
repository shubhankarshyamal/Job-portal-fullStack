package com.jobportal.jobportalbackend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "application")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Many applications → one job
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_id", nullable = false)
    private JobPosting job;

    @Column(name = "applicant_name", length = 150)
    private String applicantName;

    @Column(length = 150)
    private String email;

    @Column(name = "resume_url", length = 255)
    private String resumeUrl;

    @Column(name = "applied_at")
    private LocalDateTime appliedAt = LocalDateTime.now();
}
