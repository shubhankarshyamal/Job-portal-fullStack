package com.jobportal.jobportalbackend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BaseResponse <T> {
    boolean success;
    String message;
    T data;

}
