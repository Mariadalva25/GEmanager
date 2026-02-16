package com.example.backend.controller;

import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

import com.example.backend.dto.RegisterDTO;
import com.example.backend.model.User;
import com.example.backend.service.UserService;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody RegisterDTO dto) {
        return userService.register(dto);
    }
}
