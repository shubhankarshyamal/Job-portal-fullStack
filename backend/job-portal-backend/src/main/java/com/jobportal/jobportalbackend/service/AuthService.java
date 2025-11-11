package com.jobportal.jobportalbackend.service;

import com.jobportal.jobportalbackend.dto.LoginRequest;
import com.jobportal.jobportalbackend.dto.LoginResponse;
import com.jobportal.jobportalbackend.entity.User;
import com.jobportal.jobportalbackend.repository.UserRepository;
import com.jobportal.jobportalbackend.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public LoginResponse login(LoginRequest loginRequest) {

        User user = userRepository.findByUsername(loginRequest.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        System.out.println("PasswordEncoder type: " + passwordEncoder.getClass().getName());
        System.out.println("Raw: " + loginRequest.getPassword());
        System.out.println("Encoded in DB: " + user.getPassword());
        System.out.println("Matches? " + passwordEncoder.matches(loginRequest.getPassword(), user.getPassword()));

        if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            String token = jwtService.generateToken(user.getUsername());

            LoginResponse response = new LoginResponse();
            response.setToken(token);
            return response;
        } else {
            throw new RuntimeException("Invalid username or password");
        }
    }
}
