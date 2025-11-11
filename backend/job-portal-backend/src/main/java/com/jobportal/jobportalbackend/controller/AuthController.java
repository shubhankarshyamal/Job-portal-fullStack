package com.jobportal.jobportalbackend.controller;

import com.jobportal.jobportalbackend.dto.BaseResponse;
import com.jobportal.jobportalbackend.dto.LoginRequest;
import com.jobportal.jobportalbackend.dto.LoginResponse;
import com.jobportal.jobportalbackend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${server.baseurl}/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<BaseResponse<LoginResponse>> login(@RequestBody LoginRequest loginRequest){
        BaseResponse<LoginResponse> loginResponseBaseResponse = new BaseResponse<>();
        try{

            LoginResponse loginResponseData = authService.login(loginRequest);
            loginResponseBaseResponse.setSuccess(true);
            loginResponseBaseResponse.setMessage("Successfully logged in");
            loginResponseBaseResponse.setData(loginResponseData);
            return ResponseEntity.ok(loginResponseBaseResponse);
        } catch(Exception e){
            loginResponseBaseResponse.setSuccess(false);
            loginResponseBaseResponse.setMessage(e.getMessage());
            loginResponseBaseResponse.setData(null);
            return ResponseEntity.status(404).body(loginResponseBaseResponse);
        }

    }

}
